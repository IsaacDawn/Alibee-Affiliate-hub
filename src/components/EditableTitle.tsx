import React, { useState, useRef, useEffect } from 'react';
import { Edit3, Check, X } from 'lucide-react';
// import { useLanguage } from '../hooks/useLanguage'; // Removed

interface EditableTitleProps {
  title: string;
  onSave: (newTitle: string) => void;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  isLoading?: boolean;
}

export const EditableTitle: React.FC<EditableTitleProps> = ({
  title,
  onSave,
  className = '',
  maxLength = 200,
  placeholder = 'Enter product title...',
  isLoading = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // const { t } = useLanguage(); // Removed

  // Update editValue when title prop changes
  useEffect(() => {
    setEditValue(title);
  }, [title]);

  // Focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditValue(title);
  };

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue && trimmedValue !== title) {
      onSave(trimmedValue);
      console.log('Title changed and saved:', trimmedValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(title);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setEditValue(value);
    }
  };

  if (isEditing) {
    return (
      <div className="relative w-full">
        <textarea
          ref={inputRef}
          value={editValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          placeholder={placeholder}
          className={`w-full bg-white/90 backdrop-blur-sm border-2 border-blue-400 rounded-lg px-3 py-2 text-black resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className}`}
          rows={Math.max(2, Math.ceil(editValue.length / 50))}
          maxLength={maxLength}
        />
        <div className="absolute top-1 right-1 flex gap-1" dir="ltr">
          <button
            onClick={handleSave}
            className="p-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            title="Save changes"
          >
            <Check className="w-3 h-3" />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            title="Cancel editing"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {editValue.length}/{maxLength} characters
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative group cursor-pointer ${className} ${isLoading ? 'opacity-50 pointer-events-none' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleStartEdit}
    >
      <div className="relative">
        {title}
        {isLoading && (
          <div className="absolute -top-1 -right-1">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {!isLoading && (isHovered || isEditing) && (
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Edit3 className="w-4 h-4 text-blue-500 bg-white rounded-full p-0.5 shadow-sm" />
          </div>
        )}
      </div>
      <div className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {isLoading ? "Saving..." : "Click to edit"}
      </div>
    </div>
  );
};
