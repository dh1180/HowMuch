# HowMuch

> 필요한 계산, 바로.

HowMuch는 로그인 없이 바로 사용할 수 있는 정적 계산·단위 변환 웹사이트입니다. 모든 계산은 브라우저에서 처리하며 Astro로 정적 빌드한 뒤 Cloudflare Pages에 배포합니다.

## 기술 스택

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- GitHub Actions

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

Cloudflare Dashboard에서 다음 순서로 설정합니다.

1. Workers & Pages → Create application
2. **Pages 탭 선택**
3. Import an existing Git repository
4. GitHub의 `dh1180/HowMuch` 선택
5. 아래 빌드 설정 입력

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

이 저장소에는 Workers용 `wrangler.jsonc`를 두지 않습니다. Cloudflare Pages 프로젝트로 직접 연결하는 구성을 기준으로 합니다.

## Custom Domain

Pages 프로젝트가 생성된 뒤 Custom domains에서 원하는 서브도메인을 먼저 등록합니다.

예: `how-much.kro.kr`

외부 DNS 제공자를 사용하는 서브도메인은 해당 제공자에서 CNAME을 Pages 주소로 연결합니다.

`how-much.kro.kr → <project>.pages.dev`

중요: DNS에서 CNAME을 먼저 만들기 전에 Cloudflare Pages의 Custom domains에 해당 도메인을 먼저 등록합니다.

## SEO

- 페이지별 title / description / canonical
- Open Graph / Twitter Card
- JSON-LD `WebSite` 구조화 데이터
- sitemap 자동 생성
- robots.txt 자동 생성
- 1200×630 Open Graph 기본 이미지

실제 공개 주소가 확정되면 Cloudflare Pages Build variables에 `SITE_URL`을 등록합니다.

예: `SITE_URL=https://how-much.kro.kr`

## 커밋 규칙

```text
feat: 기능 추가
fix: 버그 수정
design: UI/UX 변경
refactor: 리팩터링
docs: 문서 수정
chore: 설정 및 기타 작업
```
