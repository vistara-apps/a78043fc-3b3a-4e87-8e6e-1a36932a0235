'use client';

import { useState, useRef } from 'react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

export function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
        isDragging
          ? 'border-pink-400 bg-pink-400/10'
          : 'border-white/30 hover:border-white/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Upload Product Image</h3>
          <p className="text-white/70 mb-4">
            Drag and drop your product image here, or click to browse
          </p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Choose File
          </button>
        </div>
        
        <p className="text-white/50 text-sm">
          Supports JPG, PNG, WebP (Max 10MB)
        </p>
      </div>
    </div>
  );
}
