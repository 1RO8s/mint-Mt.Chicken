export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// IDが取得できない場合を想定する
export const existsGaId = GA_TRACKING_ID != undefined && GA_TRACKING_ID != ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
