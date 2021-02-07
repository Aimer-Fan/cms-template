FROM nginx:alpine

RUN mkdir -p /workspace/web

WORKDIR /workspace/web

COPY ./dist/ /workspace/web/
COPY nginx.conf /etc/nginx/nginx.conf

CMD nginx -g 'daemon off;'