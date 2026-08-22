import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface RouteInfo {
  path: string;
  pathname: string;
  params: Record<string, string>;
  hash: string;
}

interface RouterContextType {
  route: RouteInfo;
  navigate: (to: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parseHash(hashStr: string): RouteInfo {
  let clean = hashStr.startsWith('#') ? hashStr.slice(1) : hashStr;
  if (!clean || clean === '') clean = '/';
  if (!clean.startsWith('/')) clean = '/' + clean;

  const [pathWithQuery, fragment] = clean.split('#');
  const [pathname] = pathWithQuery.split('?');

  const params: Record<string, string> = {};

  // Check pattern: /project/:id
  const projectMatch = pathname.match(/^\/project\/([^/]+)/);
  if (projectMatch) {
    params.id = projectMatch[1];
  }

  return {
    path: clean,
    pathname,
    params,
    hash: fragment || ''
  };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteInfo>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setRoute(parsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((to: string) => {
    let target = to;
    if (!target.startsWith('#')) {
      if (!target.startsWith('/')) target = '/' + target;
      target = '#' + target;
    }
    if (window.location.hash === target) {
      setRoute(parseHash(target));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = target;
    }
  }, []);

  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate('#/');
    }
  }, [navigate]);

  return (
    <RouterContext.Provider value={{ route, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
