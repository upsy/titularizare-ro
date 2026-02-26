"use client";

import { ExternalResource } from "@/types/lectii";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";

interface ExternalResourcesProps {
  resources: ExternalResource[];
}

export function ExternalResources({ resources }: ExternalResourcesProps) {
  if (resources.length === 0) return null;

  return (
    <div className="border-l-3 border-blue-400 pl-4 py-3">
      <div className="mb-3 flex items-center gap-2">
        <ExternalLink className="h-4 w-4 text-blue-600" />
        <h4 className="font-semibold text-foreground">Resurse externe</h4>
      </div>
      <ul className="space-y-2.5">
        {resources.map((resource, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {resource.title}
                </a>
                <Badge variant="default" className="text-[10px]">
                  {resource.source}
                </Badge>
              </div>
              {resource.description && (
                <p className="mt-0.5 text-xs text-muted">{resource.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
