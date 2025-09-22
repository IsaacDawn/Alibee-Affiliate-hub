import { useEffect, useState } from "react";
import API_ENDPOINTS from "../../constants"; // default
import { API_ENDPOINTS as NAMED_ENDPOINTS } from "../../constants"; // named (if used elsewhere)

type SystemStatus = {
  db?: "ok" | "error" | string;
  ali_client?: "ok" | "error" | string;
  database?: "connected" | "error" | string;
  aliexpress_api?: "configured" | "not_configured" | string;
  message?: string;
  name?: string;
  version?: string;
};

function SystemStatus() {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const HEALTH_URL = NAMED_ENDPOINTS?.HEALTH || API_ENDPOINTS.HEALTH;

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(HEALTH_URL, { method: "GET" });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = (await res.json()) as SystemStatus;
        setStatus(data);
      } catch (e) {
        console.error("Failed to fetch system status:", e);
        setStatus({
          db: "error",
          ali_client: "error",
          message: "Backend server not available",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const id = setInterval(fetchStatus, 30_000);
    return () => clearInterval(id);
  }, [HEALTH_URL]);

  if (loading) {
    return (
      <div className="p-3 bg-gray-100 rounded-lg">
        <div className="text-sm text-gray-600">Checking system status…</div>
      </div>
    );
  }

  if (!status) {
    return (
      <div className="p-3 bg-red-100 rounded-lg">
        <div className="text-sm text-red-600">❌ Server connection error</div>
      </div>
    );
  }

  const items = [
    {
      icon: "🗄️",
      label: "Database connectivity",
      ok: status.db === "ok" || status.database === "connected",
    },
    {
      icon: "🔌",
      label: "AliExpress API connectivity",
      ok: status.ali_client === "ok" || status.aliexpress_api === "configured",
    },
  ];

  return (
    <div className="p-2 md:p-3 bg-gray-900 rounded-xl border border-gray-700">
      <div className="text-sm md:text-xs font-medium text-white mb-2">📊 System</div>
      <div className="space-y-2">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-between p-2 bg-gray-800 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-base md:text-sm">{it.icon}</span>
              <span className="text-sm md:text-xs text-gray-300">{it.label}</span>
            </div>
            <span
              className={`text-sm md:text-xs font-medium ${
                it.ok ? "text-green-400" : "text-red-400"
              }`}
            >
              {it.ok ? "OK" : "Error"}
            </span>
          </div>
        ))}
      </div>

      {status.message && (
        <div className="text-xs text-red-400 mt-2 p-2 bg-red-500/10 rounded-lg">
          {status.message}
        </div>
      )}
    </div>
  );
}

// Both named and default exports to avoid breaking different imports
export { SystemStatus };
export default SystemStatus;
