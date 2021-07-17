import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    icon?: FunctionalComponent<AntdIconProps>;
    permission?: Array<string>;
  }
}
