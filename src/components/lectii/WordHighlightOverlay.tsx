"use client";

import { useEffect, useRef, RefObject } from "react";

interface WordHighlightOverlayProps {
  containerRef: RefObject<HTMLElement | null>;
  activeWordIdx: number;
}

/**
 * Floating highlight that slides from word to word.
 * Uses direct DOM manipulation — no React re-renders on word change.
 *
 * Same line → slide horizontally (CSS transition on left/width).
 * New line → fade out, move, fade in.
 */
export function WordHighlightOverlay({ containerRef, activeWordIdx }: WordHighlightOverlayProps) {
  const highlightRef = useRef<HTMLDivElement>(null);
  const prevTopRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    if (!container || !highlight) return;

    // Clear previous near-word classes
    container.querySelectorAll(".word-near").forEach((el) => {
      el.classList.remove("word-near");
    });

    if (activeWordIdx < 0) {
      highlight.style.opacity = "0";
      prevTopRef.current = null;
      return;
    }

    const wordEl = container.querySelector(`[data-word-idx="${activeWordIdx}"]`) as HTMLElement | null;
    if (!wordEl) {
      highlight.style.opacity = "0";
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const wordRect = wordEl.getBoundingClientRect();

    const top = wordRect.top - containerRect.top + container.scrollTop;
    const left = wordRect.left - containerRect.left + container.scrollLeft;
    const width = wordRect.width;
    const height = wordRect.height;

    // Detect line change
    const lineHeight = height * 1.5;
    const prevTop = prevTopRef.current;
    const isLineChange = prevTop !== null && Math.abs(top - prevTop) > lineHeight;

    if (isLineChange) {
      // Fade out → move → fade in
      highlight.style.transition = "opacity 80ms ease-out";
      highlight.style.opacity = "0";
      setTimeout(() => {
        highlight.style.transition = "none";
        highlight.style.left = `${left}px`;
        highlight.style.top = `${top}px`;
        highlight.style.width = `${width + 2}px`;
        highlight.style.height = `${height}px`;
        // Force reflow
        highlight.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions
        highlight.style.transition = "opacity 80ms ease-in";
        highlight.style.opacity = "1";
      }, 90);
    } else {
      // Same line — smooth slide
      highlight.style.transition = "left 180ms ease, top 180ms ease, width 180ms ease, opacity 80ms ease";
      highlight.style.left = `${left}px`;
      highlight.style.top = `${top}px`;
      highlight.style.width = `${width + 2}px`;
      highlight.style.height = `${height}px`;
      highlight.style.opacity = "1";
    }

    prevTopRef.current = top;

    // Spotlight adjacent words (±1)
    for (const offset of [-1, 1]) {
      const nearEl = container.querySelector(`[data-word-idx="${activeWordIdx + offset}"]`);
      if (nearEl) {
        nearEl.classList.add("word-near");
      }
    }
  }, [activeWordIdx, containerRef]);

  return (
    <div
      ref={highlightRef}
      style={{
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        borderRadius: "3px",
        backgroundColor: "rgba(96, 165, 250, 0.25)",
        zIndex: 1,
      }}
    />
  );
}
