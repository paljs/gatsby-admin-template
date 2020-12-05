FROM node:latest as builder

WORKDIR /build
COPY . .
RUN yarn install && GATSBY_TELEMETRY_DISABLED=1 yarn build

FROM nginx:alpine

EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html
COPY --from=builder /build/public /usr/share/nginx/html
RUN \
	chown nginx:nginx -R /usr/share/nginx/html && \
	find /usr/share/nginx/html -type d -exec chmod 550 {} + && \
	find /usr/share/nginx/html -type f -exec chmod 440 {} +

