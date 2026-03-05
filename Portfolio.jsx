import { useState, useEffect, useRef } from "react";

/* ─── SVG ICONS ─── */
const Icons = {
  Python: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656L6.207 5.404H12.02V6.219H3.887S0 5.789 0 11.938c0 6.148 3.405 5.929 3.405 5.929H5.43v-2.851s-.116-3.405 3.352-3.405h5.769s3.243.052 3.243-3.134V3.282S18.316 0 11.914 0zm-3.21 1.867a1.047 1.047 0 0 1 1.046 1.048A1.047 1.047 0 0 1 8.704 3.96a1.047 1.047 0 0 1-1.047-1.046A1.047 1.047 0 0 1 8.704 1.867z" fill="#3776AB"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.748H12.98v-.815h8.133S24 18.211 24 12.062c0-6.148-3.405-5.929-3.405-5.929H18.57v2.851s.116 3.405-3.352 3.405H9.449S6.206 12.337 6.206 15.523V20.718S5.684 24 12.086 24zm3.21-1.867a1.047 1.047 0 0 1-1.046-1.048 1.047 1.047 0 0 1 1.046-1.046 1.047 1.047 0 0 1 1.047 1.046 1.047 1.047 0 0 1-1.047 1.048z" fill="#FFD43B"/></svg>),
  Airflow: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm0 2.16l8.232 4.752v9.504L12 21.84 3.768 16.416V6.912L12 2.16zM8.4 7.2L6 8.64v2.88l2.4 1.44V10.08l1.2-.72V7.2H8.4zm7.2 0h-1.2v2.16l1.2.72v2.88l2.4-1.44V8.64L15.6 7.2zM12 9.6l-2.4 1.44v2.88L12 15.36l2.4-1.44V11.04L12 9.6z" fill="#017CEE"/></svg>),
  Spark: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M23.176 5.028c-.067-.314-.404-.424-.663-.27L17.5 7.695l-2.631-4.559a.489.489 0 0 0-.848 0L11.39 7.695 6.376 4.759c-.26-.155-.596-.044-.663.27a.487.487 0 0 0 .227.527l5.013 2.935v5.868l-5.013 2.935a.487.487 0 0 0-.227.527c.067.314.404.424.663.27l5.013-2.935 2.631 4.559a.489.489 0 0 0 .848 0l2.631-4.559 5.013 2.935c.26.155.596.044.663-.27a.487.487 0 0 0-.227-.527l-5.013-2.935V8.491l5.013-2.935a.487.487 0 0 0 .228-.528z" fill="#E25A1C"/></svg>),
  Kafka: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2zm0 3a2 2 0 0 0-2 2 2 2 0 0 0 1 1.732V10H8.5A2.5 2.5 0 0 0 6 12.5a2.5 2.5 0 0 0 1.764 2.383L6.5 17H8l1.264-2.117A2.5 2.5 0 0 0 10.5 15h.5v1.268A2 2 0 0 0 12 20a2 2 0 0 0 2-2 2 2 0 0 0-1-1.732V15h.5a2.5 2.5 0 0 0 1.236-.117L16 17h1.5l-1.264-2.117A2.5 2.5 0 0 0 18 12.5 2.5 2.5 0 0 0 15.5 10H13V8.732A2 2 0 0 0 14 7a2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1zm-3 6h6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 15 14h-6a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 9 11zm3 5a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z" fill="#231F20"/></svg>),
  PostgreSQL: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.58.637 7.17.413 5.934.67 5.26.801 4.636 1.0 4.1 1.39A6.67 6.67 0 0 0 2.3 3.155 11.034 11.034 0 0 0 .995 7.01C.47 9.19.52 11.51 1.545 13.2c.587.975 1.43 1.58 2.348 1.58.432 0 .868-.1 1.319-.42l.02-.014C5.56 14.17 5.92 14 6.333 14c.405 0 .764.16 1.09.43.37.302.61.756.733 1.254.148.6.1 1.23-.21 1.707l-.009.012c-.55.83-.62 1.81-.33 2.68.292.87.93 1.55 1.65 2.0 1.33.85 2.93 1.21 4.05 1.18.56-.02 1.06-.14 1.44-.4.24-.17.5-.47.67-.86.86.01 2.19-.18 3.32-1.06 1.48-1.16 2.36-3.14 1.84-6.28l-.005-.03c-.24-1.4-.34-2.52-.2-3.36.13-.77.43-1.27 1.02-1.59l.02-.01c.38-.22.79-.37 1.17-.53.38-.16.73-.35.99-.63.52-.57.65-1.44.42-2.56A9.46 9.46 0 0 0 21.6 5.2a6.685 6.685 0 0 0-2.73-3.96A5.932 5.932 0 0 0 17.127 0z" fill="#336791"/></svg>),
  MySQL: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.068-.133-.03-.04-.1-.06-.194-.158zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.01l-1.344 4.41H2.4l-1.336-4.41h-.01a72.293 72.293 0 0 0-.236 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.836.39 3.68.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.049-.47-.147-.945L6.4 14.615h.87l.818 3.51c.024.104.037.212.037.323v.013c.036-.06.07-.12.108-.18l1.204-3.666h.35zm5.254 2.102v.28c0 .394-.042.696-.128.905-.085.21-.226.395-.422.556a1.97 1.97 0 0 1-1.304.42c-.294 0-.584-.04-.867-.12l.06-.46c.26.04.526.06.8.06.543 0 .93-.17 1.16-.51.14-.207.21-.522.21-.945v-.192c-.232.31-.586.466-1.066.466-.344 0-.643-.12-.898-.363s-.38-.554-.38-.93c0-.384.13-.702.393-.956.263-.254.57-.38.92-.38.373 0 .67.148.888.446v-.38h.635v1.608zm2.607 1.978H17v-5.654h.658v5.654zm3.35-.78c-.364.616-.892.923-1.587.923-.343 0-.65-.105-.92-.314s-.485-.502-.645-.878c-.16-.376-.24-.794-.24-1.25 0-.475.08-.905.24-1.29.16-.385.384-.682.672-.89.288-.208.617-.312.988-.312.5 0 .91.182 1.23.546.32.365.48.88.48 1.548v.266h-2.872c.02.55.154.976.4 1.278.248.302.585.454 1.01.454.406 0 .748-.175 1.027-.524l.217.443zm-5.235-2.27c0 .27.072.486.216.645.144.16.323.24.536.24.25 0 .455-.097.614-.29.16-.193.24-.45.24-.77v-.28c0-.323-.082-.58-.246-.77-.163-.192-.37-.288-.618-.288-.226 0-.412.086-.557.258-.145.172-.217.4-.217.69l.032.565zm5.23-.83c-.03-.35-.123-.625-.275-.826-.152-.2-.364-.3-.634-.3-.28 0-.505.1-.674.296-.17.196-.268.474-.295.83h1.878zm-9.47 0c-.03-.35-.122-.625-.274-.826-.152-.2-.364-.3-.634-.3-.28 0-.505.1-.674.296-.17.196-.268.474-.295.83h1.877z" fill="#4479A1"/></svg>),
  AWS: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 6.65a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.071c-.048.16-.104.264-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#FF9900"/></svg>),
  Docker: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.974 2.662h2.118a.186.186 0 0 0 .185-.185v-1.888a.185.185 0 0 0-.185-.185H2.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m20.406-1.88a4.853 4.853 0 0 0-2.046-.893v-.052a4.682 4.682 0 0 0-.17-1.178 4.584 4.584 0 0 0-1.875-2.655C16.07 7.56 14.973 7.2 13.76 7.2c-.667 0-1.313.113-1.917.34a4.59 4.59 0 0 0-1.563 1.003 4.6 4.6 0 0 0-.97 1.49c-.172.427-.273.877-.295 1.343-.047.004-.094.006-.14.006-1.5 0-2.87.603-3.861 1.579-.99.975-1.6 2.323-1.6 3.806 0 .306.028.607.08.9A4.8 4.8 0 0 0 4 19.44a4.865 4.865 0 0 0 2.064 1.657 5.003 5.003 0 0 0 2.055.44h11.622c.718 0 1.411-.147 2.042-.42a4.861 4.861 0 0 0 1.662-1.166 4.792 4.792 0 0 0 1.015-1.708 4.77 4.77 0 0 0-.054-3.363z" fill="#2496ED"/></svg>),
  dbt: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M20.278 5.803 18.2 3.722a2.366 2.366 0 0 0-3.346 0l-1.41 1.41 4.424 4.424 2.41-2.41a.828.828 0 0 0 0-1.343zm-7.97 0L8.63 9.479l5.891 5.89 3.678-3.678zm-4.424 4.424L6.22 11.89a.828.828 0 0 0 0 1.343l2.081 2.081a2.366 2.366 0 0 0 3.346 0l1.41-1.41zm10.51 4.424-1.343 1.343a2.366 2.366 0 0 1-3.346 0l-1.41-1.41 1.343-1.343zM3.722 5.803a2.366 2.366 0 0 1 3.346 0l1.41 1.41-4.424 4.424-2.41-2.41a.828.828 0 0 1 0-1.343z" fill="#FF694A"/></svg>),
  TensorFlow: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311-6.168-3.564v8.99l-4.096 2.378V7.579l-4.095 2.378v4.771l4.095 2.37v2.534l6.168-3.564v-4.77l4.096 2.37z" fill="#FF6F00"/></svg>),
  PyTorch: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12.005 0 4.952 7.053a9.865 9.865 0 0 0 0 13.992 9.865 9.865 0 0 0 13.99 0 9.865 9.865 0 0 0 0-13.992L16.6 9.4a5.63 5.63 0 0 1 0 7.995 5.63 5.63 0 0 1-7.995 0 5.63 5.63 0 0 1 0-7.995L12.005 0zm3.495 3.507a1.16 1.16 0 0 1 1.16 1.16 1.16 1.16 0 0 1-1.16 1.16 1.16 1.16 0 0 1-1.16-1.16 1.16 1.16 0 0 1 1.16-1.16z" fill="#EE4C2C"/></svg>),
  ScikitLearn: () => (<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="10" fill="#F7931E" opacity="0.15"/><path d="M8 16V8l4 4 4-4v8" stroke="#F7931E" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  NLP: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" fill="#4285F4"/></svg>),
  LLM: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M21 10.5h-1V7c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-3.5h1c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zM18 17H3V7h15v10zm-5-5H6v-2h7v2zm3 2h-3v-2h3v2z" fill="#7B61FF"/></svg>),
  RAG: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 0 0 9.5 3 6.5 6.5 0 0 0 3 9.5 6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#00B4D8"/></svg>),
  MLOps: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#34A853"/></svg>),
  DataAnalysis: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#1976D2"/></svg>),
  DataMining: () => (<svg viewBox="0 0 24 24" width="22" height="22"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" fill="#FB8C00"/></svg>),
  GitHub: () => (<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#24292e"/></svg>),
  LinkedIn: () => (<svg viewBox="0 0 24 24" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/></svg>),
};

const NAV_ITEMS = ["Home", "About", "Data Engineering", "AI / ML", "Projects", "Contact"];

const DE_SKILLS = [
  { name: "Python", Icon: Icons.Python, category: "Language" },
  { name: "Apache Airflow", Icon: Icons.Airflow, category: "Orchestration" },
  { name: "dbt", Icon: Icons.dbt, category: "Transformation" },
  { name: "Apache Spark", Icon: Icons.Spark, category: "Big Data" },
  { name: "Apache Kafka", Icon: Icons.Kafka, category: "Streaming" },
  { name: "PostgreSQL", Icon: Icons.PostgreSQL, category: "Database" },
  { name: "MySQL", Icon: Icons.MySQL, category: "Database" },
  { name: "AWS", Icon: Icons.AWS, category: "Cloud" },
  { name: "Docker", Icon: Icons.Docker, category: "DevOps" },
  { name: "Data Mining", Icon: Icons.DataMining, category: "Analytics" },
];

const ML_SKILLS = [
  { name: "Machine Learning", Icon: Icons.MLOps, category: "Core AI" },
  { name: "NLP", Icon: Icons.NLP, category: "Core AI" },
  { name: "LLM", Icon: Icons.LLM, category: "Generative AI" },
  { name: "RAG", Icon: Icons.RAG, category: "Generative AI" },
  { name: "MLOps", Icon: Icons.MLOps, category: "AI Ops" },
  { name: "LLMOps", Icon: Icons.LLM, category: "AI Ops" },
  { name: "PyTorch", Icon: Icons.PyTorch, category: "Framework" },
  { name: "TensorFlow", Icon: Icons.TensorFlow, category: "Framework" },
  { name: "Scikit-learn", Icon: Icons.ScikitLearn, category: "Framework" },
  { name: "Data Analysis", Icon: Icons.DataAnalysis, category: "Analytics" },
];

const PROJECTS = [
  { title: "E-commerce Data Pipeline", tag: "Data Engineering", color: "#0ea5e9", description: "Automated ETL pipeline processing e-commerce transactions using Python, Apache Airflow, and PostgreSQL.", tech: ["Python", "Apache Airflow", "PostgreSQL"], status: "Completed" },
  { title: "Real-time Analytics Dashboard", tag: "Data Engineering", color: "#0ea5e9", description: "Real-time dashboard monitoring medical patient state using Kafka, Debezium and Spark Streaming.", tech: ["Apache Kafka", "Spark", "Debezium"], status: "Completed" },
  { title: "Data Quality Framework", tag: "Data Engineering", color: "#0ea5e9", description: "Implemented data quality checks and monitoring system, reducing data issues and improving reliability.", tech: ["Python", "Great Expectations"], status: "Completed" },
  { title: "AI-Aided Loan Default Prediction", tag: "AI / ML", color: "#8b5cf6", description: "Final year undergraduate group project — AI aided loan default prediction model for small scale financial institutions.", tech: ["ML", "AI", "Python"], status: "On Going" },
  { title: "Carbon Footprint Chatbot", tag: "AI / ML", color: "#8b5cf6", description: "Domain-specific chatbot with LoRA fine-tuned Mistral 7B and RAG pipeline using FAISS + Hugging Face.", tech: ["Python", "LLM", "RAG", "FAISS"], status: "Completed" },
  { title: "Bank Document Verification (OCR)", tag: "AI / ML", color: "#8b5cf6", description: "Hybrid OCR + CRNN system to extract and verify information from scanned bank documents.", tech: ["OCR", "CRNN", "Python"], status: "Completed" },
];

/* Animated skill row */
const SkillRow = ({ name, Icon, category, accent, index }) => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), index * 70);
        setTimeout(() => setChecked(true), index * 70 + 380);
      }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", marginBottom: "9px", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-14px)", transition: `opacity 0.4s ease ${index * 0.07}s, transform 0.4s ease ${index * 0.07}s` }}>
      {/* Pill */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: `1.5px solid ${accent}25`, borderRadius: "10px", padding: "9px 15px", minWidth: "210px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", zIndex: 2 }}>
        <Icon />
        <div>
          <div style={{ fontWeight: 600, fontSize: "0.86rem", color: "#1e293b" }}>{name}</div>
          <div style={{ fontSize: "0.68rem", color: "#94a3b8", marginTop: "1px" }}>{category}</div>
        </div>
      </div>
      {/* Dashed line */}
      <div style={{ flex: 1, margin: "0 6px", position: "relative" }}>
        <svg width="100%" height="14" style={{ overflow: "visible" }}>
          <line x1="0" y1="7" x2="100%" y2="7" stroke={accent} strokeWidth="1.5" strokeDasharray="5 4"
            style={{ strokeDashoffset: visible ? 0 : 300, transition: `stroke-dashoffset 0.9s ease ${index * 0.07 + 0.15}s` }} opacity="0.55" />
        </svg>
        {/* Moving dot */}
        {checked && (
          <div style={{ position: "absolute", top: "3px", left: 0, width: "8px", height: "8px", borderRadius: "50%", background: accent, animation: `slideDot 2s linear ${index * 0.1}s infinite` }} />
        )}
      </div>
      {/* Checkmark */}
      <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: checked ? accent : "#f8fafc", border: `2px solid ${checked ? accent : "#e2e8f0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: `background 0.3s ease ${index * 0.07 + 0.45}s, border-color 0.3s ease ${index * 0.07 + 0.45}s`, boxShadow: checked ? `0 0 0 3px ${accent}20` : "none" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7l3 3L11.5 3.5" stroke={checked ? "#fff" : "#cbd5e1"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ strokeDasharray: 18, strokeDashoffset: checked ? 0 : 18, transition: `stroke-dashoffset 0.35s ease ${index * 0.07 + 0.55}s` }} />
        </svg>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", border: `1.5px solid ${hov ? project.color + "50" : "#e2e8f0"}`, borderRadius: "14px", padding: "1.5rem", transition: "all 0.25s", transform: hov ? "translateY(-3px)" : "none", boxShadow: hov ? `0 10px 28px rgba(0,0,0,0.08)` : "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: project.color, background: project.color + "12", padding: "3px 9px", borderRadius: "100px", border: `1px solid ${project.color}28` }}>{project.tag}</span>
        <span style={{ fontSize: "0.68rem", fontWeight: 600, color: project.status === "Completed" ? "#16a34a" : "#d97706", background: project.status === "Completed" ? "#dcfce7" : "#fef3c7", padding: "3px 9px", borderRadius: "100px" }}>{project.status}</span>
      </div>
      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem", lineHeight: 1.4 }}>{project.title}</h3>
      <p style={{ fontSize: "0.81rem", color: "#64748b", lineHeight: 1.75, marginBottom: "1rem" }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {project.tech.map(t => <span key={t} style={{ fontSize: "0.7rem", color: "#475569", background: "#f1f5f9", padding: "2px 8px", borderRadius: "100px", border: "1px solid #e2e8f0" }}>{t}</span>)}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (p) => { setActive(p); setMenuOpen(false); window.scrollTo(0, 0); };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'DM Sans','Segoe UI',sans-serif", color: "#1e293b" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#f1f5f9}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideDot{0%{left:0;opacity:1}80%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}
        @keyframes pulseDot{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.5);opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .sec{animation:fadeUp 0.5s ease forwards}
        .nb{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.83rem;font-weight:500;padding:7px 13px;border-radius:8px;color:#64748b;transition:all 0.2s}
        .nb:hover{color:#0f172a;background:#f1f5f9}
        .nb.on{color:#0369a1;background:#e0f2fe;font-weight:700}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:1.4rem}
        .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
        @media(max-width:960px){.g3{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.g2,.g3{grid-template-columns:1fr}.desk{display:none!important}.burg{display:flex!important}.hero-grid{grid-template-columns:1fr!important}}
        .burg{display:none;align-items:center;justify-content:center;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;width:36px;height:36px;cursor:pointer;font-size:1rem;color:#475569}
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(248,250,252,0.94)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e2e8f0", transition: "box-shadow 0.3s", boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0.7rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#0f172a", cursor: "pointer", letterSpacing: "-0.02em" }} onClick={() => go("Home")}>
            <span style={{ color: "#0ea5e9" }}>A</span>VISHKA
          </div>
          <div className="desk" style={{ display: "flex", gap: "2px" }}>
            {NAV_ITEMS.map(item => <button key={item} className={`nb${active === item ? " on" : ""}`} onClick={() => go(item)}>{item}</button>)}
          </div>
          <button className="burg" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
        </div>
        {menuOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #f1f5f9", padding: "0.6rem 2rem 1rem" }}>
            {NAV_ITEMS.map(item => <button key={item} className={`nb${active === item ? " on" : ""}`} style={{ display: "block", width: "100%", textAlign: "left", marginBottom: "2px" }} onClick={() => go(item)}>{item}</button>)}
          </div>
        )}
      </nav>

      <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 2rem 5rem" }}>

        {/* ── HOME ── */}
        {active === "Home" && (
          <div className="sec hero-grid" style={{ minHeight: "calc(100vh - 57px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", paddingTop: "2rem", paddingBottom: "2rem" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#e0f2fe", border: "1px solid #bae6fd", borderRadius: "100px", padding: "4px 13px", marginBottom: "1.4rem" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#0ea5e9", animation: "pulseDot 2s ease-in-out infinite" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0369a1" }}>Open to Work</span>
              </div>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.2rem,4vw,3.8rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0f172a", marginBottom: "1.1rem" }}>
                Avishka<br /><span style={{ color: "#0ea5e9" }}>Koswaththa</span>
              </h1>
              <p style={{ fontSize: "0.97rem", color: "#64748b", lineHeight: 1.85, maxWidth: "440px", marginBottom: "1.8rem" }}>
                Computer Engineering graduate building scalable data pipelines, AI/ML systems, and transforming raw data into meaningful insights.
              </p>
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <button onClick={() => go("Projects")} style={{ padding: "10px 22px", background: "#0ea5e9", color: "#fff", border: "none", borderRadius: "9px", fontWeight: 700, fontSize: "0.87rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", boxShadow: "0 4px 12px #0ea5e930" }}>View Projects →</button>
                <button onClick={() => go("Contact")} style={{ padding: "10px 22px", background: "#fff", color: "#475569", border: "1.5px solid #e2e8f0", borderRadius: "9px", fontWeight: 600, fontSize: "0.87rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get in Touch</button>
              </div>
              {/* Specialisation buttons */}
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
                {[{ label: "Data Engineering", color: "#0ea5e9", bg: "#e0f2fe", page: "Data Engineering" }, { label: "AI / ML", color: "#8b5cf6", bg: "#ede9fe", page: "AI / ML" }].map(c => (
                  <button key={c.label} onClick={() => go(c.page)} style={{ padding: "7px 16px", background: c.bg, color: c.color, border: `1.5px solid ${c.color}30`, borderRadius: "8px", fontWeight: 700, fontSize: "0.78rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>{c.label} →</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem", paddingTop: "1.8rem", borderTop: "1px solid #f1f5f9" }}>
                {[["6+", "Projects"], ["6 Mo", "Internship"], ["2025", "Graduating"]].map(([n, l]) => (
                  <div key={l}><div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#0ea5e9" }}>{n}</div><div style={{ fontSize: "0.73rem", color: "#94a3b8", marginTop: "1px" }}>{l}</div></div>
                ))}
              </div>
            </div>

            {/* Right — SVG data flow */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "400px" }}>
                <defs>
                  <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.2" fill="#cbd5e1" opacity="0.5"/>
                  </pattern>
                  <filter id="sh"><feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#0ea5e9" floodOpacity="0.1"/></filter>
                  <filter id="sh2"><feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#8b5cf6" floodOpacity="0.1"/></filter>
                </defs>
                <rect width="400" height="380" fill="url(#dots)" rx="16"/>

                {/* Lines with animated dashes */}
                {[
                  { x1:75, y1:75, x2:200, y2:185, c:"#0ea5e9", d:"0.2s" },
                  { x1:325, y1:75, x2:200, y2:185, c:"#0ea5e9", d:"0.5s" },
                  { x1:75, y1:305, x2:200, y2:195, c:"#8b5cf6", d:"0.8s" },
                  { x1:325, y1:305, x2:200, y2:195, c:"#8b5cf6", d:"1.1s" },
                  { x1:200, y1:220, x2:200, y2:320, c:"#10b981", d:"1.4s" },
                ].map(({ x1, y1, x2, y2, c, d }, i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth="1.8" strokeDasharray="5 4" opacity="0.5"
                    style={{ animation: `none`, strokeDashoffset: 0 }} />
                ))}

                {/* Animated moving dots */}
                {[
                  { path: "M75,75 L200,185", c: "#0ea5e9", dur: "2s", delay: "0s" },
                  { path: "M325,75 L200,185", c: "#0ea5e9", dur: "2.3s", delay: "0.4s" },
                  { path: "M75,305 L200,195", c: "#8b5cf6", dur: "2.6s", delay: "0.8s" },
                  { path: "M325,305 L200,195", c: "#8b5cf6", dur: "2.9s", delay: "1.2s" },
                  { path: "M200,222 L200,322", c: "#10b981", dur: "1.8s", delay: "1.6s" },
                ].map(({ path, c, dur, delay }, i) => (
                  <circle key={i} r="4.5" fill={c} opacity="0.9">
                    <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={path} />
                  </circle>
                ))}

                {/* Source nodes */}
                {[
                  { x: 75, y: 75, label: "Raw Data", sub: "Sources", icon: "📦", f: "url(#sh)" },
                  { x: 325, y: 75, label: "Streaming", sub: "Kafka", icon: "⚡", f: "url(#sh)" },
                  { x: 75, y: 305, label: "ML Models", sub: "Training", icon: "🤖", f: "url(#sh2)" },
                  { x: 325, y: 305, label: "LLM / RAG", sub: "Inference", icon: "🧠", f: "url(#sh2)" },
                ].map(({ x, y, label, sub, icon, f }) => (
                  <g key={label} filter={f}>
                    <rect x={x - 46} y={y - 32} width="92" height="64" rx="13" fill="#fff" stroke={f.includes("sh2") ? "#8b5cf630" : "#0ea5e930"} strokeWidth="1.5"/>
                    <text x={x} y={y - 8} textAnchor="middle" fontSize="18">{icon}</text>
                    <text x={x} y={y + 12} textAnchor="middle" fontSize="9.5" fill={f.includes("sh2") ? "#8b5cf6" : "#0ea5e9"} fontWeight="700" fontFamily="DM Sans,sans-serif">{label}</text>
                    <text x={x} y={y + 25} textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontFamily="DM Sans,sans-serif">{sub}</text>
                  </g>
                ))}

                {/* Central pipeline */}
                <g filter="url(#sh)">
                  <rect x={148} y={165} width="104" height="60" rx="14" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.8"/>
                  <text x="200" y="188" textAnchor="middle" fontSize="10" fill="#0ea5e9" fontWeight="800" fontFamily="Syne,sans-serif">PIPELINE</text>
                  <text x="200" y="203" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontFamily="DM Sans,sans-serif">ETL · Transform</text>
                  <text x="200" y="216" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontFamily="DM Sans,sans-serif">Orchestrate</text>
                </g>

                {/* Output */}
                <g>
                  <rect x={156} y={326} width="88" height="38" rx="10" fill="#10b981"/>
                  <text x="200" y="349" textAnchor="middle" fontSize="9.5" fill="#fff" fontWeight="700" fontFamily="DM Sans,sans-serif">Insights ✦</text>
                </g>
              </svg>
            </div>
          </div>
        )}

        {/* ── ABOUT ── */}
        {active === "About" && (
          <div className="sec" style={{ paddingTop: "4rem" }}>
            <p style={{ fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.7rem" }}>WHO I AM</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "3rem", letterSpacing: "-0.02em" }}>About Me</h2>
            <div className="g2" style={{ alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.8rem" }}>Background</div>
                  <p style={{ color: "#64748b", lineHeight: 1.85, fontSize: "0.88rem" }}>Final year Computer Engineering student at University of Ruhuna with a deep focus on AI/ML and Data Engineering. Through coursework, projects, and a 6-month internship, I've built strong foundations in production-grade data systems and intelligent applications.</p>
                </div>
                <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.8rem" }}>Education</div>
                  <div style={{ borderLeft: "3px solid #bae6fd", paddingLeft: "1rem" }}>
                    <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>BScEng (Hons) in Computer Engineering</p>
                    <p style={{ color: "#64748b", fontSize: "0.83rem", marginTop: "4px" }}>University of Ruhuna</p>
                    <p style={{ color: "#94a3b8", fontSize: "0.78rem", marginTop: "2px" }}>Expected 2025 · AI/ML, Data Engineering & Analytics</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b5cf6", marginBottom: "0.8rem" }}>Experience</div>
                  <div style={{ borderLeft: "3px solid #ddd6fe", paddingLeft: "1rem" }}>
                    <p style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>Intern Software Engineer</p>
                    <p style={{ color: "#64748b", fontSize: "0.83rem", marginTop: "4px" }}>eSupport Technologies PVT(LTD)</p>
                    <p style={{ color: "#94a3b8", fontSize: "0.78rem", marginTop: "2px" }}>08/2024 – 01/2025 · 6 Months</p>
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b5cf6", marginBottom: "0.8rem" }}>Core Interests</div>
                  {["Scalable data pipelines & orchestration", "Fine-tuning large language models", "MLOps & production AI systems", "Real-time streaming architectures"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.65rem" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "5px", background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5L8.5 2" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      </div>
                      <span style={{ fontSize: "0.84rem", color: "#64748b" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── DATA ENGINEERING ── */}
        {active === "Data Engineering" && (
          <div className="sec" style={{ paddingTop: "4rem" }}>
            <p style={{ fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.7rem" }}>SPECIALISATION</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>Data Engineering</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "3rem", maxWidth: "480px" }}>Building robust pipelines, orchestrating workflows, and ensuring data quality at scale.</p>
            <div className="g2" style={{ alignItems: "start", marginBottom: "3.5rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "1.1rem" }}>Skills</div>
                {DE_SKILLS.map((s, i) => <SkillRow key={s.name} {...s} accent="#0ea5e9" index={i} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {[{ icon: "🌪️", title: "Pipeline Orchestration", desc: "Designing and scheduling complex DAG-based workflows with Apache Airflow for reliable, automated data movement." }, { icon: "⚡", title: "Batch & Stream Processing", desc: "Processing large-scale datasets with Apache Spark and real-time event streams with Kafka." }, { icon: "🔧", title: "Data Transformation (dbt)", desc: "Writing modular, testable SQL transformations using dbt to build analytics-ready data models." }, { icon: "✅", title: "Data Quality", desc: "Automated quality checks using Great Expectations to catch anomalies before they reach production." }].map(c => (
                  <div key={c.title} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "12px", padding: "1.1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "1.2rem", marginBottom: "0.35rem" }}>{c.icon}</div>
                    <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.88rem", marginBottom: "0.25rem" }}>{c.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0f172a", marginBottom: "1.1rem" }}>Related Projects</h3>
            <div className="g3">{PROJECTS.filter(p => p.tag === "Data Engineering").map((p, i) => <ProjectCard key={i} project={p} />)}</div>
          </div>
        )}

        {/* ── AI / ML ── */}
        {active === "AI / ML" && (
          <div className="sec" style={{ paddingTop: "4rem" }}>
            <p style={{ fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8b5cf6", marginBottom: "0.7rem" }}>SPECIALISATION</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>AI / ML Engineering</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "3rem", maxWidth: "480px" }}>Designing and deploying intelligent systems — from classical ML to fine-tuned LLMs and production AI ops.</p>
            <div className="g2" style={{ alignItems: "start", marginBottom: "3.5rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8b5cf6", marginBottom: "1.1rem" }}>Skills</div>
                {ML_SKILLS.map((s, i) => <SkillRow key={s.name} {...s} accent="#8b5cf6" index={i} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {[{ icon: "🤖", title: "Classical & Deep ML", desc: "Training classification, regression, and neural network models with Scikit-learn, PyTorch, and TensorFlow." }, { icon: "💬", title: "NLP & LLMs", desc: "Building NLP pipelines, fine-tuning Mistral 7B with LoRA, and prompt engineering for production LLMs." }, { icon: "🔍", title: "RAG Pipelines", desc: "Retrieval-augmented generation with FAISS vector stores and Hugging Face for grounded AI responses." }, { icon: "🔄", title: "MLOps & LLMOps", desc: "Model lifecycle management — versioning, experiment tracking, deployment and monitoring in production." }].map(c => (
                  <div key={c.title} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "12px", padding: "1.1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "1.2rem", marginBottom: "0.35rem" }}>{c.icon}</div>
                    <h4 style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.88rem", marginBottom: "0.25rem" }}>{c.title}</h4>
                    <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.7 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0f172a", marginBottom: "1.1rem" }}>Related Projects</h3>
            <div className="g3">{PROJECTS.filter(p => p.tag === "AI / ML").map((p, i) => <ProjectCard key={i} project={p} />)}</div>
          </div>
        )}

        {/* ── PROJECTS ── */}
        {active === "Projects" && (
          <div className="sec" style={{ paddingTop: "4rem" }}>
            <p style={{ fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.7rem" }}>PORTFOLIO</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>All Projects</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "3rem" }}>A collection of data engineering and AI/ML work.</p>
            <div className="g3">{PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}</div>
          </div>
        )}

        {/* ── CONTACT ── */}
        {active === "Contact" && (
          <div className="sec" style={{ paddingTop: "4rem" }}>
            <p style={{ fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ea5e9", marginBottom: "0.7rem" }}>GET IN TOUCH</p>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>Let's Connect</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", marginBottom: "3rem", maxWidth: "440px" }}>Open to AI/ML and Data Engineering roles. Reach out for opportunities, collaborations, or just to say hello.</p>
            <div className="g2" style={{ alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {[{ icon: "✉️", label: "Email", value: "avishkakkoswaththa@gmail.com", href: "mailto:avishkakkoswaththa@gmail.com" }, { icon: "📞", label: "Phone", value: "(+94) 71 524 1066", href: "tel:+94715241066" }, { icon: "📍", label: "Location", value: "59, 4th Canal, Hasalaka, Sri Lanka" }].map(item => (
                  <div key={item.label} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "12px", padding: "1.1rem", display: "flex", alignItems: "center", gap: "0.9rem", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    <div><div style={{ fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "2px" }}>{item.label}</div>
                      {item.href ? <a href={item.href} style={{ color: "#0ea5e9", fontSize: "0.84rem", textDecoration: "none", fontWeight: 500 }}>{item.value}</a> : <span style={{ color: "#475569", fontSize: "0.84rem" }}>{item.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {[{ Icon: Icons.GitHub, label: "GitHub", value: "AvishkaKoswatta", href: "https://github.com/AvishkaKoswatta" }, { Icon: Icons.LinkedIn, label: "LinkedIn", value: "avishkakoswaththa", href: "http://www.linkedin.com/in/avishkakoswaththa" }].map(item => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                    style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: "12px", padding: "1.1rem", display: "flex", alignItems: "center", gap: "0.9rem", textDecoration: "none", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", transition: "border-color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#bae6fd"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}>
                    <div style={{ width: "34px", height: "34px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}><item.Icon /></div>
                    <div><div style={{ fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94a3b8", marginBottom: "2px" }}>{item.label}</div><span style={{ color: "#0ea5e9", fontSize: "0.84rem", fontWeight: 500 }}>{item.value}</span></div>
                  </a>
                ))}
                <div style={{ background: "linear-gradient(135deg, #f0f9ff, #f5f3ff)", border: "1.5px solid #bae6fd", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>🚀</div>
                  <p style={{ fontSize: "0.83rem", color: "#475569", lineHeight: 1.8 }}>Seeking full-time roles in <span style={{ color: "#0ea5e9", fontWeight: 700 }}>AI/ML Engineering</span> or <span style={{ color: "#8b5cf6", fontWeight: 700 }}>Data Engineering</span>.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer style={{ borderTop: "1px solid #e2e8f0", padding: "1.4rem 2rem", textAlign: "center", background: "#fff" }}>
        <p style={{ fontSize: "0.76rem", color: "#94a3b8" }}>© 2025 Avishka Koswaththa · Built with React</p>
      </footer>
    </div>
  );
}
