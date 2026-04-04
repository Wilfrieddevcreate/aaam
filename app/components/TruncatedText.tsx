"use client";

import { useState } from "react";

interface Props {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function TruncatedText({ text, maxLength = 120, className = "" }: Props) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = text.length > maxLength;

  if (!needsTruncation) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div>
      <p className={className}>
        {expanded ? text : `${text.slice(0, maxLength).trimEnd()}...`}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-primary text-xs font-medium mt-1 hover:underline cursor-pointer"
      >
        {expanded ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
}
