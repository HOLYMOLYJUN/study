// 공통 타입 정의

export type TCommonResponse<T = unknown> = {
  success: boolean;
  data: T;
  message?: string;
};

