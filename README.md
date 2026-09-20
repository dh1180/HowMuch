# HowMuch

> 필요한 계산, 바로.

HowMuch는 로그인 없이 바로 사용할 수 있는 정적 계산·단위 변환 웹사이트입니다. 모든 계산은 브라우저에서 처리하며 Astro로 정적 빌드한 뒤 Cloudflare Workers Static Assets에 배포합니다.

## 기술 스택

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Workers Static Assets
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

Cloudflare Workers 환경으로 미리보기:

```bash
npm run preview:cf
```

## Cloudflare Workers 배포

정적 파일은 `wrangler.jsonc`의 `assets.directory = "./dist"` 설정으로 배포합니다. 별도의 Worker 스크립트나 Astro Cloudflare 어댑터는 사용하지 않습니다.

### 1. Cloudflare 인증값 준비

Cloudflare Dashboard에서 Workers 배포용 API Token과 Account ID를 준비합니다.

### 2. GitHub Actions Secrets 등록

Repository → Settings → Secrets and variables → Actions → Secrets에 아래 두 값을 등록합니다.

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### 3. 실제 사이트 주소 등록

Repository → Settings → Secrets and variables → Actions → Variables에 아래 값을 등록합니다.

- `SITE_URL`: 실제 공개 주소
  - 예: `https://howmuch.example.com`
  - 또는 최초 배포 후 발급된 `workers.dev` 주소

`SITE_URL`이 설정되면 canonical, Open Graph URL, sitemap, robots.txt가 동일한 주소를 사용합니다.

### 4. 자동 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 실행됩니다.

Cloudflare Secrets가 아직 없으면 빌드까지만 수행하고 배포 단계는 자동으로 건너뜁니다.

수동 배포도 가능합니다.

```bash
npm run deploy
```

로컬 CLI 배포 시에는 먼저 다음 명령으로 Cloudflare 인증을 완료합니다.

```bash
npx wrangler login
```

## 배포 설정

`wrangler.jsonc`:

- Worker name: `howmuch`
- Static assets: `./dist`
- Custom 404: `404-page`
- HTML handling: `auto-trailing-slash`

## SEO

- 페이지별 title / description / canonical
- Open Graph / Twitter Card
- JSON-LD `WebSite` 구조화 데이터
- sitemap 자동 생성
- robots.txt 자동 생성
- 1200×630 Open Graph 기본 이미지

## 커밋 규칙

```text
feat: 기능 추가
fix: 버그 수정
design: UI/UX 변경
refactor: 리팩터링
docs: 문서 수정
chore: 설정 및 기타 작업
```
