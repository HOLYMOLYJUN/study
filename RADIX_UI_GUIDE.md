# Radix UI 설치 및 사용 가이드

## 설치 방법

Radix UI는 필요한 컴포넌트만 개별 패키지로 설치합니다.

### 자주 사용하는 컴포넌트 설치

```bash
# 기본 컴포넌트들
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-popover @radix-ui/react-tabs @radix-ui/react-toast

# 또는 하나씩 설치
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-select
```

### 전체 패키지 목록

Radix UI는 40개 이상의 컴포넌트를 제공합니다:

- `@radix-ui/react-accordion` - 아코디언
- `@radix-ui/react-alert-dialog` - 알림 다이얼로그
- `@radix-ui/react-aspect-ratio` - 종횡비
- `@radix-ui/react-avatar` - 아바타
- `@radix-ui/react-checkbox` - 체크박스
- `@radix-ui/react-collapsible` - 접기/펼치기
- `@radix-ui/react-context-menu` - 컨텍스트 메뉴
- `@radix-ui/react-dialog` - 다이얼로그/모달
- `@radix-ui/react-dropdown-menu` - 드롭다운 메뉴
- `@radix-ui/react-hover-card` - 호버 카드
- `@radix-ui/react-label` - 라벨
- `@radix-ui/react-menubar` - 메뉴바
- `@radix-ui/react-navigation-menu` - 네비게이션 메뉴
- `@radix-ui/react-popover` - 팝오버
- `@radix-ui/react-progress` - 프로그레스 바
- `@radix-ui/react-radio-group` - 라디오 그룹
- `@radix-ui/react-scroll-area` - 스크롤 영역
- `@radix-ui/react-select` - 셀렉트
- `@radix-ui/react-separator` - 구분선
- `@radix-ui/react-slider` - 슬라이더
- `@radix-ui/react-switch` - 스위치
- `@radix-ui/react-tabs` - 탭
- `@radix-ui/react-toast` - 토스트 알림
- `@radix-ui/react-toggle` - 토글
- `@radix-ui/react-tooltip` - 툴팁
- 등등...

## 사용 예시

### 1. Dialog (모달)

```tsx
import * as Dialog from "@radix-ui/react-dialog";

export default function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded bg-blue-500 px-4 py-2 text-white">열기</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="mb-4 text-xl font-bold">제목</Dialog.Title>
          <Dialog.Description className="mb-4">설명</Dialog.Description>
          <Dialog.Close className="rounded bg-gray-200 px-4 py-2">닫기</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

### 2. Dropdown Menu

```tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function MyDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="rounded bg-gray-200 px-4 py-2">메뉴</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[200px] rounded bg-white p-2 shadow-lg">
          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">항목 1</DropdownMenu.Item>
          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">항목 2</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">항목 3</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
```

### 3. Select

```tsx
import * as Select from "@radix-ui/react-select";

export default function MySelect() {
  return (
    <Select.Root>
      <Select.Trigger className="rounded border bg-white px-4 py-2">
        <Select.Value placeholder="선택하세요" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="min-w-[200px] rounded bg-white p-2 shadow-lg">
          <Select.Item value="option1" className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">
            옵션 1
          </Select.Item>
          <Select.Item value="option2" className="cursor-pointer rounded px-3 py-2 hover:bg-gray-100">
            옵션 2
          </Select.Item>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
```

### 4. Toast (알림)

```tsx
import * as Toast from "@radix-ui/react-toast";

export default function MyToast() {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider>
      <button onClick={() => setOpen(true)}>토스트 보기</button>
      <Toast.Root open={open} onOpenChange={setOpen} className="rounded bg-white p-4 shadow-lg">
        <Toast.Title>알림</Toast.Title>
        <Toast.Description>메시지 내용</Toast.Description>
        <Toast.Close>닫기</Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed right-0 bottom-0 p-4" />
    </Toast.Provider>
  );
}
```

## 특징

1. **Headless UI**: 스타일이 없어서 Tailwind CSS로 자유롭게 스타일링 가능
2. **접근성**: ARIA 속성과 키보드 네비게이션 자동 지원
3. **타입 안전성**: TypeScript 완벽 지원
4. **모듈화**: 필요한 컴포넌트만 설치

## Tailwind CSS와 함께 사용

Radix UI는 스타일이 없으므로 Tailwind CSS 클래스를 직접 적용하면 됩니다.

## 참고 자료

- [Radix UI 공식 문서](https://www.radix-ui.com/)
- [모든 컴포넌트 목록](https://www.radix-ui.com/primitives/docs/overview/introduction)
