"use client";

import { useEffect, useState } from "react";
import { BookOpen, Check } from "lucide-react";

interface MaterialFile {
  filename: string;
  label: string;
}

interface MaterialSelectorProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function MaterialSelector({ selected, onChange }: MaterialSelectorProps) {
  const [files, setFiles] = useState<MaterialFile[]>([]);

  useEffect(() => {
    fetch("/api/materials")
      .then((r) => r.json())
      .then((data) => setFiles(data.files))
      .catch(console.error);
  }, []);

  const toggle = (filename: string) => {
    if (selected.includes(filename)) {
      onChange(selected.filter((f) => f !== filename));
    } else {
      onChange([...selected, filename]);
    }
  };

  if (files.length === 0) return null;

  return (
    <div className="border-b border-neutral-200 px-4 py-3 bg-neutral-50">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="h-3.5 w-3.5 text-neutral-500" />
        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
          Study Materials
        </span>
        <span className="text-xs text-neutral-400">
          ({selected.length === 0 ? "all" : selected.length} loaded)
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {files.map((file) => {
          const isSelected = selected.length === 0 || selected.includes(file.filename);
          const isExplicitlySelected = selected.includes(file.filename);
          return (
            <button
              key={file.filename}
              onClick={() => toggle(file.filename)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                isSelected
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-300"
              }`}
            >
              {isExplicitlySelected && <Check className="h-3 w-3" />}
              {file.label}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-400 mt-2">
        {selected.length === 0
          ? "All materials loaded — click to filter by topic"
          : "Click topics to toggle. Unselected topics will not be included."}
      </p>
    </div>
  );
}
