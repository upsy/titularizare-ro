"use client";

import { Mic } from "lucide-react";
import { getSessionsForTopic, getDriveVideoUrl } from "@/data/cursuri";

interface OriginalRecordingsProps {
  topicId: string;
}

export function OriginalRecordings({ topicId }: OriginalRecordingsProps) {
  const sessions = getSessionsForTopic(topicId).filter((s) => s.audioUrl);

  const seen = new Set<string>();
  const unique = sessions.filter((s) => {
    if (seen.has(s.audioUrl!)) return false;
    seen.add(s.audioUrl!);
    return true;
  });

  if (unique.length === 0) return null;

  return (
    <div className="mb-6 space-y-3">
      {unique.map((session) => (
        <div
          key={session.id}
          className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Mic className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-foreground">
              Înregistrare originală curs ({session.displayDate})
            </span>
            {session.duration && (
              <span className="text-xs text-muted">· {session.duration}</span>
            )}
            {session.driveFileId && (
              <a
                href={getDriveVideoUrl(session.driveFileId)}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-blue-600 hover:text-blue-800 hover:underline"
              >
                Vezi pe Drive ↗
              </a>
            )}
          </div>
          <audio
            controls
            preload="metadata"
            src={session.audioUrl}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}
