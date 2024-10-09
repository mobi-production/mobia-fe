/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { RouteObject } from 'react-router-dom'

type Props = Record<string, RouteObject[]>

/**
 * @name createMergeRoute
 * @description 라우트를 손쉽게 구분하기 위해 작성된 함수입니다.
 * 해당 함수는 고차함수의 형태로 함수를 반환하며 해당 함수로 생성된 함수의 매개변수에는 Record<string, RouteObject[]>가 전달되며
 * 전달된 record의 key가 parent route path의 이름이 됩니다.
 *
 * @author Peanut
 * @param {RouteObject} initialRoute
 * @returns {Function(args:Record<string, RouteObject[]>): RouteObject[]}
 * @example
 * const mergeRoute = createMergeRoute(initialRoute)
 * const router = createBrowserRoute(mergeRoute({
 *    test: TestRoute // "/test"가 parent root name이 됩니다.
 * }))
 */
const createMergeRoute =
  (initialRoute: RouteObject = {}) =>
  (args: Props): RouteObject[] => {
    const childrenRoute = Object.entries(args).map(([path, routes]) => ({
      path,
      children: routes
    })) satisfies RouteObject[]

    return [
      {
        ...initialRoute,
        children: initialRoute.children?.concat(childrenRoute)
      } as RouteObject
    ]
  }

export default createMergeRoute
