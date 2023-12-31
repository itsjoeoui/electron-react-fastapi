import { Link, Outlet, RootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const route = new RootRoute({
  component: (): JSX.Element => (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold'
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        {/* <Link */}
        {/*   to={'/posts'} */}
        {/*   activeProps={{ */}
        {/*     className: 'font-bold' */}
        {/*   }} */}
        {/* > */}
        {/*   Posts */}
        {/* </Link> */}
        {/* <Link */}
        {/*   to="/layout-a" */}
        {/*   activeProps={{ */}
        {/*     className: 'font-bold' */}
        {/*   }} */}
        {/* > */}
        {/*   Layout */}
        {/* </Link> */}
      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
})
