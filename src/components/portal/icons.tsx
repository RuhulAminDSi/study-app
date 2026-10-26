/** Stroke icons for the portal chrome (24×24, currentColor). */
const PATHS = {
  dashboard: 'M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z',
  notes: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h5',
  pyq: 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7',
  layers: 'M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 17.5l10 5 10-5',
  chevron: 'm9 6 6 6-6 6',
  chevronLeft: 'm15 6-6 6 6 6',
  home: 'M3 11.5 12 4l9 7.5M5.5 10v10h4.5v-6h4v6h4.5V10',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  back: 'M19 12H5M11 18l-6-6 6-6',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM20 20l-4-4',
  check: 'm5 12 4.5 4.5L19 7',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  info: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v5M12 8h.01',
  alert: 'M12 3 2 20h20zM12 10v4M12 17h.01',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  close: 'M6 6l12 12M18 6 6 18',
  pin: 'M7 3h10v18l-5-3.5L7 21z',
  exam: 'M9 3.5h6v3H9zM7 5H5v16h14V5h-2M8.5 13.5l2.5 2.5 4.5-5',
  flag: 'M5 21V4M5 4h12l-2.5 4 2.5 4H5',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM12 11.5v1',
  chart: 'M5 20v-8M12 20V5M19 20v-5M3 20h18',
  refresh: 'M20 11a8 8 0 0 0-14.9-3.5L3 9M3 4v5h5M4 13a8 8 0 0 0 14.9 3.5L21 15M21 20v-5h-5',
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  eraser: 'M8 20h12M4.5 15.5l9-9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L12 18H7z',
}

export type IconName = keyof typeof PATHS

export default function Icon({ name, className = 'pi' }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  )
}
