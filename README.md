# VNDO Atlas

**VNDO Atlas — Những ghi chú đường xa** là một trang travel editorial tương tác, được xây dựng như một collage bằng giấy parchment: kiến trúc, typography Cormorant Garamond, những ghi chú bên lề và 13 điểm đến được nối với nhau bởi một data contract duy nhất.

Repository: [github.com/vietdoo/vndo-atlas](https://github.com/vietdoo/vndo-atlas)

## Tổng quan

VNDO Atlas là frontend React tĩnh, tập trung vào trải nghiệm đọc và chuyển cảnh giữa các điểm đến. Việt Nam được chọn làm điểm đến mặc định; hero image, tiêu đề, mô tả, caption, marker và điều hướng đều được lấy từ cùng một trạng thái quốc gia để tránh lệch nội dung.

Các điểm đến hiện có gồm Việt Nam, Trung Quốc, Nhật Bản, Thái Lan, Hàn Quốc, Campuchia, Lào, Indonesia, Malaysia, Singapore, Ấn Độ, Sri Lanka và Nepal.

> **Trạng thái:** dự án đã sẵn sàng để phát triển tiếp trên local hoặc deploy qua nền tảng hỗ trợ Vite. Toàn bộ ảnh collage và favicon hiện đã nằm trong repository tại `client/public/assets`, vì vậy Vercel không cần route Manus Storage để phục vụ asset.

## Công nghệ

| Thành phần | Sử dụng |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 và CSS editorial tùy biến |
| Routing | Wouter, với một route chính `/` |
| Typography | Cormorant Garamond, Noto Serif, JetBrains Mono |
| Icons | lucide-react và SVG mark VNDO |
| Package manager | pnpm 10 |
| Hosting hiện tại | Manus WebDev static hosting |

## Yêu cầu môi trường

Để chạy dự án, cài đặt **Node.js 20 trở lên** và **pnpm 10**. Node.js 22 là lựa chọn được khuyến nghị cho môi trường phát triển hiện tại. Có thể kiểm tra phiên bản bằng:

```bash
node --version
pnpm --version
```

Nếu máy chưa có pnpm, cài đúng major version của repository:

```bash
npm install --global pnpm@10.4.1
```

## Chạy local

Clone repository và cài dependencies:

```bash
git clone https://github.com/vietdoo/vndo-atlas.git
cd vndo-atlas
pnpm install
```

Khởi động Vite development server:

```bash
pnpm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Nếu cổng 3000 đang bận, Vite sẽ tự chọn cổng kế tiếp và in URL tương ứng trong terminal.

Development server có hỗ trợ HMR. Sau khi sửa `client/src/data/destinations.ts`, `client/src/pages/Home.tsx` hoặc `client/src/index.css`, trình duyệt sẽ tự cập nhật để tiện kiểm tra typography, state và responsive layout.

## Các lệnh chính

| Lệnh | Mục đích |
| --- | --- |
| `pnpm run dev` | Chạy development server tại cổng 3000 |
| `pnpm run check` | Kiểm tra TypeScript mà không tạo output |
| `pnpm run build` | Tạo production bundle tại `dist/public` và bundle server tại `dist/index.js` |
| `pnpm run preview` | Preview Vite production output ở local |
| `pnpm run start` | Chạy server Node production sau khi đã build |
| `pnpm run format` | Format source bằng Prettier |

Quy trình kiểm tra đề xuất trước mỗi commit:

```bash
pnpm run check
pnpm run build
```

Để chạy bản build qua server Node:

```bash
pnpm run build
pnpm run start
```

Sau đó mở [http://localhost:3000](http://localhost:3000). Server production phục vụ nội dung từ `dist/public` và có fallback về `index.html` cho client-side routing.

## Cấu trúc dự án

```text
vndo-atlas/
├── client/
│   ├── index.html              # metadata, font và favicon
│   ├── public/
│   │   └── assets/             # ảnh WebP và mark SVG được commit cùng repository
│   └── src/
│       ├── data/destinations.ts # data contract 13 điểm đến
│       ├── pages/Home.tsx      # trang editorial chính
│       ├── components/         # component dùng chung và shadcn/ui
│       ├── hooks/              # React hooks hỗ trợ
│       ├── App.tsx             # theme provider và routing
│       └── index.css           # design tokens và toàn bộ visual system
├── server/index.ts             # server Node phục vụ production local
├── shared/                     # placeholder types tương thích template
├── vercel.json                 # build/output settings cho Vercel
├── package.json                # scripts và dependencies
├── pnpm-lock.yaml              # lockfile bắt buộc khi cài đặt reproducible
└── README.md
```

## Cập nhật nội dung điểm đến

Tất cả điểm đến nằm trong `client/src/data/destinations.ts`. Mỗi object phải giữ đủ các trường sau:

```ts
type Destination = {
  name: string;
  country: string;
  phonetic: string;
  title: string;
  description: string;
  aside: string;
  image: string;
  marker: string;
};
```

Không nên tạo một state riêng cho title, ảnh hoặc caption. `Home.tsx` chỉ nên đọc các trường từ `active` và `adjacent` để mọi phần của hero chuyển cùng một quốc gia.

Khi bổ sung ảnh mới, ưu tiên asset collage đã được xử lý cùng palette parchment, ink brown, jade và cinnabar. Bản hiện tại chủ động giữ bộ ảnh đã tối ưu trong `client/public/assets` để repository có thể clone và deploy độc lập trên Vercel. Nếu bộ asset tăng đáng kể, hãy chuyển sang storage/CDN ổn định và cập nhật URL trong data contract.

## Biến môi trường

Bản frontend không cần API key để chạy các chức năng điều hướng và hiển thị nội dung. Một số biến dưới đây là tùy chọn hoặc dành cho runtime Manus:

| Biến | Bắt buộc | Ghi chú |
| --- | --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | Không | Endpoint analytics nếu muốn giữ script Umami trong `client/index.html` |
| `VITE_ANALYTICS_WEBSITE_ID` | Không | Website ID tương ứng với analytics endpoint |
| `BUILT_IN_FORGE_API_URL` | Không trên Vercel | Dùng cho proxy Manus Storage trong development/runtime Manus |
| `BUILT_IN_FORGE_API_KEY` | Không trên Vercel | Secret nội bộ cho proxy Manus Storage; không commit vào Git |

Không đưa secret thật vào repository. Với Vercel, khai báo biến môi trường trong **Project Settings → Environment Variables** và chỉ bật cho các environment cần thiết.

## Deploy lên Vercel bằng GitHub

Repository đã có `vercel.json` để Vercel dùng đúng build command và output directory. Quy trình đề xuất là:

1. Truy cập [Vercel New Project](https://vercel.com/new) và import repository `vietdoo/vndo-atlas`.
2. Chọn framework preset **Vite**.
3. Giữ root directory là thư mục gốc của repository.
4. Kiểm tra các giá trị sau:

   ```text
   Install Command: pnpm install --frozen-lockfile
   Build Command:   pnpm run build
   Output Directory: dist/public
   Node.js Version: 20 hoặc 22
   ```

5. Nếu cần analytics, thêm `VITE_ANALYTICS_ENDPOINT` và `VITE_ANALYTICS_WEBSITE_ID` trong Environment Variables.
6. Nhấn **Deploy**. Các commit mới trên branch `main` sẽ tạo deployment mới nếu bật automatic deployments.

## Deploy lên Vercel bằng CLI

Cài Vercel CLI và đăng nhập:

```bash
npm install --global vercel
vercel login
```

Từ thư mục repository, chạy lần đầu ở chế độ preview:

```bash
vercel
```

Khi đã kiểm tra preview, deploy production:

```bash
vercel --prod
```

Nếu CLI hỏi cấu hình, chọn project hiện tại hoặc tạo project mới, giữ build command `pnpm run build` và output directory `dist/public`.

## Lưu ý khi deploy lên Vercel

Vercel không cần route Manus Storage cho bản hiện tại: toàn bộ 13 ảnh điểm đến và favicon đã được tối ưu thành WebP/SVG và commit tại `client/public/assets`. Vite sẽ copy thư mục này nguyên trạng vào `dist/public/assets`, còn giao diện tham chiếu bằng đường dẫn `/assets/...`.

Tổng kích thước bộ asset local khoảng 4,6 MB. Đây là lựa chọn phù hợp để repository có thể clone và deploy độc lập; nếu bộ ảnh tăng đáng kể trong tương lai, hãy cân nhắc Vercel Blob, Cloudinary, S3-compatible storage hoặc CDN ảnh để giảm kích thước clone và cải thiện cache. Các nguồn ảnh tham chiếu ban đầu được tải về và lưu thành bản local để deployment không phụ thuộc hotlink hoặc route bên ngoài.

Nếu không cần analytics trên Vercel, hãy xóa hoặc vô hiệu hóa script Umami trong `client/index.html` thay vì để các placeholder environment variable chưa được thay thế.

## Git workflow

Tạo branch cho thay đổi và kiểm tra trước khi push:

```bash
git checkout -b feature/ten-thay-doi
pnpm run check
pnpm run build
git add .
git commit -m "Describe the change"
git push -u origin feature/ten-thay-doi
```

Sau khi merge vào `main`, Vercel sẽ tạo deployment mới nếu project đã bật Git integration.

## Thiết kế và accessibility

Visual system của dự án dùng nền parchment, typography serif editorial, bố cục bất đối xứng và chuyển động nhẹ như giấy collage. Khi chỉnh sửa, giữ tương phản màu, focus state bàn phím, `aria-label` cho nút điều hướng và `prefers-reduced-motion` cho các animation không thiết yếu.

Nội dung hiển thị được viết bằng tiếng Việt; không đưa lại glyph CJK vào marker hoặc decorative text nếu không có chủ đích biên tập rõ ràng. Khi thêm quốc gia mới, cần kiểm tra đồng bộ hero, title, description, image, caption, marker và card ở cả desktop lẫn mobile.

## Tài liệu tham khảo

1. [Vite — Deploying a Static Site](https://vite.dev/guide/static-deploy.html)
2. [Vercel — Vite deployment guide](https://vercel.com/docs/frameworks/frontend/vite)
3. [pnpm — Installation](https://pnpm.io/installation)
4. [Node.js — Download](https://nodejs.org/en/download)
