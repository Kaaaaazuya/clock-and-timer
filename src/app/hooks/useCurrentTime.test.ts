import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useCurrentTime } from "./useCurrentTime";

describe("useCurrentTime", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it("初回レンダリングでnull以外の現在の時間を返すこと", () => {
		const { result } = renderHook(() => useCurrentTime());
		expect(result.current).not.toBeNull();
		expect(result.current).toBeInstanceOf(Date);
	});

	it("1秒ごとに時間を更新すること", () => {
		const { result } = renderHook(() => useCurrentTime());
		const initialTime = result.current;

		// actでラップしてタイマーを進め、レンダリングをトリガー
		act(() => {
			vi.advanceTimersByTime(1000);
		});

		// 時間が更新されていることを確認
		expect(result.current).not.toEqual(initialTime);
	});

	it("アンマウント時にintervalがクリアされること", () => {
		const { unmount } = renderHook(() => useCurrentTime());

		// clearInterval をスパイに設定
		const clearIntervalSpy = vi.spyOn(global, "clearInterval");

		unmount();

		// タイマーがクリアされたことを確認
		expect(clearIntervalSpy).toHaveBeenCalledTimes(1);

		// スパイを解除
		clearIntervalSpy.mockRestore();
	});
});
