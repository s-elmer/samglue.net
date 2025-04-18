/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResumeImport } from './routes/resume'
import { Route as FavoritesImport } from './routes/favorites'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ResumeRoute = ResumeImport.update({
  id: '/resume',
  path: '/resume',
  getParentRoute: () => rootRoute,
} as any)

const FavoritesRoute = FavoritesImport.update({
  id: '/favorites',
  path: '/favorites',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/favorites': {
      id: '/favorites'
      path: '/favorites'
      fullPath: '/favorites'
      preLoaderRoute: typeof FavoritesImport
      parentRoute: typeof rootRoute
    }
    '/resume': {
      id: '/resume'
      path: '/resume'
      fullPath: '/resume'
      preLoaderRoute: typeof ResumeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/favorites': typeof FavoritesRoute
  '/resume': typeof ResumeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/favorites': typeof FavoritesRoute
  '/resume': typeof ResumeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/favorites': typeof FavoritesRoute
  '/resume': typeof ResumeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/favorites' | '/resume'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/favorites' | '/resume'
  id: '__root__' | '/' | '/about' | '/favorites' | '/resume'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  FavoritesRoute: typeof FavoritesRoute
  ResumeRoute: typeof ResumeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  FavoritesRoute: FavoritesRoute,
  ResumeRoute: ResumeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/favorites",
        "/resume"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/favorites": {
      "filePath": "favorites.tsx"
    },
    "/resume": {
      "filePath": "resume.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
