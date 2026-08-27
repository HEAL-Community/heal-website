export function HomeHeroAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,color-mix(in_srgb,var(--heal-emerald)_12%,transparent),transparent_34%),linear-gradient(115deg,transparent_36%,color-mix(in_srgb,var(--heal-surface)_84%,transparent)_100%)]" />
      <svg className="hero-atmosphere absolute right-[-12%] top-[-8%] h-[118%] w-[76%] max-w-[760px] opacity-90 sm:right-[-5%] sm:w-[66%] lg:right-0 lg:w-[58%]" viewBox="0 0 720 680" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="hero-atmosphere-drift" d="M430 20C560 65 690 160 670 300C650 445 535 520 394 610L280 680H720V0H430V20Z" fill="var(--heal-surface)" opacity=".92" />
        <path d="M474 98C540 126 592 180 592 249C592 326 534 382 456 382C378 382 322 326 322 249C322 180 374 126 440 98C450 94 464 94 474 98Z" fill="var(--heal-emerald)" opacity=".13" />
        <path className="hero-atmosphere-drift-slow" d="M440 222C440 183 468 151 503 151C538 151 566 183 566 222V289C566 328 538 360 503 360C468 360 440 328 440 289V222Z" fill="var(--heal-navy)" opacity=".82" />
        <path d="M427 265C407 280 387 302 373 331C358 363 352 404 359 447L382 593H498L521 447C528 404 522 363 507 331C493 302 473 280 453 265C446 260 434 260 427 265Z" fill="var(--heal-emerald)" opacity=".74" />
        <path d="M431 231C446 218 468 216 486 226L502 235L490 253C471 275 443 275 424 253L412 235L431 231Z" fill="var(--heal-gold)" opacity=".9" />
        <path d="M391 365C361 350 326 356 303 379C280 402 275 438 288 468C301 498 329 512 359 510L390 505L397 416L391 365Z" fill="var(--heal-navy)" opacity=".82" />
        <circle cx="335" cy="410" r="31" fill="var(--heal-navy)" opacity=".92" />
        <path d="M318 407C326 399 339 398 348 404C357 410 360 421 357 431L350 452H315L308 431C305 421 309 412 318 407Z" fill="var(--heal-gold)" opacity=".9" />
        <path d="M509 380C541 367 578 377 597 404C615 430 614 466 596 491C577 516 544 526 514 516L490 507L488 416L509 380Z" fill="var(--heal-emerald)" opacity=".55" />
        <circle cx="566" cy="415" r="29" fill="var(--heal-emerald)" opacity=".84" />
        <path d="M546 465C565 452 590 453 607 466C624 479 631 502 626 523L616 562H532L522 523C517 502 528 477 546 465Z" fill="var(--heal-navy)" opacity=".82" />
        <path className="hero-atmosphere-drift" d="M394 605C425 579 464 579 495 605C526 631 579 640 624 621" stroke="var(--heal-gold)" strokeWidth="12" strokeLinecap="round" opacity=".7" />
        <path d="M205 595C252 547 275 488 276 427C277 366 255 310 215 269" stroke="var(--heal-emerald)" strokeWidth="8" strokeLinecap="round" opacity=".42" />
        <path d="M188 606C220 574 241 532 246 489" stroke="var(--heal-navy)" strokeWidth="5" strokeLinecap="round" opacity=".3" />
        <circle className="hero-atmosphere-pulse" cx="230" cy="235" r="12" fill="var(--heal-gold)" opacity=".72" />
        <circle className="hero-atmosphere-pulse" cx="619" cy="176" r="8" fill="var(--heal-emerald)" opacity=".58" />
      </svg>
    </div>
  )
}

export default HomeHeroAtmosphere
