export type ToolCategory = "생활" | "인터넷" | "데이터" | "자동차" | "학교";

export interface ToolItem {
  slug: string;
  href: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  example: string;
  keywords: string[];
}

export const tools: ToolItem[] = [
  {
    slug: "pyeong",
    href: "/pyeong",
    name: "평 · 제곱미터 변환",
    description: "평과 ㎡를 양방향으로 빠르게 환산합니다.",
    category: "생활",
    icon: "⌂",
    example: "24평 → 79.34㎡",
    keywords: ["평", "제곱미터", "m2", "㎡", "아파트", "면적"],
  },
  {
    slug: "mbps",
    href: "/mbps",
    name: "Mbps · MB/s 변환",
    description: "인터넷 속도와 실제 초당 전송량을 비교합니다.",
    category: "인터넷",
    icon: "↯",
    example: "500Mbps → 62.5MB/s",
    keywords: ["인터넷", "속도", "mbps", "mb/s", "다운로드"],
  },
  {
    slug: "download-time",
    href: "/download-time",
    name: "다운로드 시간 계산",
    description: "파일 크기와 회선 속도로 예상 다운로드 시간을 계산합니다.",
    category: "인터넷",
    icon: "↓",
    example: "10GB @ 500Mbps → 약 2분 40초",
    keywords: ["다운로드", "시간", "파일", "속도", "기가"],
  },
  {
    slug: "storage",
    href: "/storage",
    name: "데이터 용량 변환",
    description: "KB, MB, GB, TB와 KiB, MiB, GiB를 변환합니다.",
    category: "데이터",
    icon: "▤",
    example: "1024MiB → 1GiB",
    keywords: ["kb", "mb", "gb", "tb", "kib", "mib", "gib", "용량"],
  },
  {
    slug: "temperature",
    href: "/temperature",
    name: "온도 변환",
    description: "섭씨, 화씨, 켈빈을 서로 변환합니다.",
    category: "생활",
    icon: "°",
    example: "25°C → 77°F",
    keywords: ["섭씨", "화씨", "켈빈", "온도", "celsius", "fahrenheit"],
  },
  {
    slug: "fuel-efficiency",
    href: "/fuel-efficiency",
    name: "연비 변환",
    description: "km/L와 L/100km를 양방향으로 환산합니다.",
    category: "자동차",
    icon: "◇",
    example: "15km/L → 6.67L/100km",
    keywords: ["연비", "자동차", "km/l", "l/100km", "기름"],
  },
  {
    slug: "gpa",
    href: "/gpa",
    name: "학점 평균 계산",
    description: "과목별 학점과 평점을 반영해 가중 평균을 계산합니다.",
    category: "학교",
    icon: "A+",
    example: "전공·교양 학점까지 가중 계산",
    keywords: ["학점", "gpa", "대학교", "성적", "평점", "4.5", "4.3"],
  },
];

export const categories = ["전체", "생활", "인터넷", "데이터", "자동차", "학교"] as const;
