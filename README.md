# HowMuch

> 필요한 계산, 바로.

HowMuch는 로그인 없이 바로 사용할 수 있는 정적 계산·단위 변환 웹사이트입니다. 모든 계산은 브라우저에서 처리하며 Astro 기반 정적 사이트로 배포합니다.

## 기술 스택

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Pages

## MVP 도구

- 평 ↔ 제곱미터
- Mbps ↔ MB/s
- 다운로드 시간
- 데이터 용량
- 섭씨 ↔ 화씨 ↔ 켈빈
- km/L ↔ L/100km
- 학점 가중 평균

## 로컬 실행

```bash
npm install
npm run dev
```

정적 빌드 확인:

```bash
npm run build
```

## Cloudflare Pages 배포

GitHub 저장소를 Cloudflare Pages에 연결하고 아래 값으로 설정합니다.

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `22`

현재 canonical URL과 sitemap은 `https://howmuch.pages.dev`를 기준으로 설정되어 있습니다. 실제 Pages 프로젝트 주소가 다르면 `astro.config.mjs`와 `public/robots.txt`의 주소를 함께 수정하세요.

## 커밋 규칙

```text
feat: 기능 추가
fix: 버그 수정
design: UI/UX 변경
refactor: 리팩터링
docs: 문서 수정
chore: 설정 및 기타 작업
```
