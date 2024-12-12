import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { afterEach } from 'node:test';
import { cleanup } from '@testing-library/react';

GlobalRegistrator.register({
  url: 'http://localhost:3000',
  width: 1920,
  height: 1080,
});

afterEach(() => {
  cleanup();
});
