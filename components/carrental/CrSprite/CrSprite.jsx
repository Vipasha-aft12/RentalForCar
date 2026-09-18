export default function CrSprite() {
  return (
    <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
       <defs>
         <linearGradient id="gDusk" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0" stopColor="#252A2E"></stop>
          <stop offset="1" stopColor="#101820"></stop>
         </linearGradient>
         <linearGradient id="gLime" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0" stopColor="#C7F36B"></stop>
          <stop offset="1" stopColor="#A9B9A0"></stop>
         </linearGradient>
         <symbol id="brand-mark" viewBox="0 0 32 32">
           <circle cx="16" cy="16" r="15" fill="#101820"></circle>
           <path d="M7 20h18M9 20l2-6h10l2 6" stroke="#C7F36B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
           <circle cx="12" cy="21.5" r="2" fill="#F7F4ED"></circle>
          <circle cx="20" cy="21.5" r="2" fill="#F7F4ED"></circle>
         </symbol>
         <symbol id="i-tick" viewBox="0 0 20 20">
          <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        </symbol>
         <symbol id="i-arrow" viewBox="0 0 20 20">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        </symbol>
         <symbol id="i-clock" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7.6" fill="none" stroke="currentColor" strokeWidth="1.7"></circle>
          <path d="M10 5.6V10l3 1.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
        </symbol>
         <symbol id="i-shield" viewBox="0 0 20 20">
          <path d="M10 2.4l6 2.3v5c0 3.6-2.5 6.8-6 7.9-3.5-1.1-6-4.3-6-7.9v-5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"></path>
          <path d="M7.3 10.1l1.9 1.9 3.6-3.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
        </symbol>
         <symbol id="i-pen" viewBox="0 0 20 20">
          <path d="M13.6 3.3l3.1 3.1L7.4 15.7l-4 .9.9-4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"></path>
        </symbol>
         <symbol id="i-slash" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" strokeWidth="1.7"></circle>
          <path d="M5.2 14.8L14.8 5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
        </symbol>
         <symbol id="i-car" viewBox="0 0 20 20">
            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M6.5 5.55c.27-.35.69-.55 1.13-.55h4.79c.45 0 .88.21 1.15.58l1.56 2.12 1.78.33c.49.09.86.52.86 1.02v1.99c0 .35-.28.63-.63.63H1.86a.63.63 0 0 1-.63-.63V9.05c0-.5.36-.93.85-1.02l1.87-.34L6.5 5.55zM8 6.45L6.84 7.95h2.46V6.45H8zm2.75 0v1.5h2.92l-1.1-1.5h-1.82z"></path>
           <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M6.15 8.95a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2zm0 1.62a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96z"></path>
           <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M14.05 8.95a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2zm0 1.62a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96z"></path>
         </symbol>
         <symbol id="i-phone" viewBox="0 0 20 20">
          <path d="M6.2 3.5c.5 0 .9.3 1 .8l.7 2.4c.1.4 0 .8-.3 1l-1.2 1a11 11 0 0 0 4.9 4.9l1-1.2c.3-.3.7-.4 1-.3l2.5.7c.5.1.8.5.8 1v2.4c0 .6-.5 1.1-1.1 1A14.5 14.5 0 0 1 3.2 4.6c0-.6.4-1.1 1-1.1z" fill="currentColor"></path>
        </symbol>
          <symbol id="v-economy" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 152h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M62 138h196c6 0 10-4 10-10v-14c0-7-5-13-12-14l-24-4-20-20c-4-4-9-6-14-6h-52c-6 0-11 2-15 6l-19 20-25 4c-7 1-12 7-12 14v14c0 6 4 10 10 10z" fill="url(#gLime)"></path>
          <path d="M126 76h44l16 18h-76z" fill="#101820" opacity=".55"></path>
          <circle cx="104" cy="138" r="16" fill="#101820"></circle>
          <circle cx="104" cy="138" r="7" fill="#A9B9A0"></circle>
          <circle cx="220" cy="138" r="16" fill="#101820"></circle>
          <circle cx="220" cy="138" r="7" fill="#A9B9A0"></circle>
        </symbol>
         <symbol id="v-compact" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 152h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M74 138h172c6 0 11-5 11-11v-16c0-8-6-14-14-15l-20-3-16-18c-4-5-10-7-16-7h-46c-6 0-12 3-16 8l-16 17-20 3c-8 1-14 7-14 15v16c0 6 5 11 11 11z" fill="#A9B9A0"></path>
          <path d="M132 74h38l14 17h-66z" fill="#101820" opacity=".5"></path>
          <circle cx="112" cy="138" r="15" fill="#101820"></circle>
          <circle cx="112" cy="138" r="6" fill="#C7F36B"></circle>
          <circle cx="212" cy="138" r="15" fill="#101820"></circle>
          <circle cx="212" cy="138" r="6" fill="#C7F36B"></circle>
        </symbol>
         <symbol id="v-suv" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 156h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M58 142h204c7 0 12-5 12-12v-28c0-8-6-15-14-16l-14-2-14-26c-3-6-9-10-16-10h-92c-7 0-13 4-16 10l-14 26-14 2c-8 1-14 8-14 16v28c0 7 5 12 12 12z" fill="url(#gLime)"></path>
          <path d="M118 60h84l12 24H106z" fill="#101820" opacity=".55"></path>
          <circle cx="102" cy="142" r="19" fill="#101820"></circle>
          <circle cx="102" cy="142" r="8" fill="#A9B9A0"></circle>
          <circle cx="222" cy="142" r="19" fill="#101820"></circle>
          <circle cx="222" cy="142" r="8" fill="#A9B9A0"></circle>
        </symbol>
         <symbol id="v-luxury" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 152h320" stroke="#C7F36B" strokeWidth="1" opacity=".25"></path>
          <path d="M48 138h224c7 0 12-5 12-12v-12c0-8-6-15-14-16l-30-5-22-18c-5-4-11-6-17-6h-70c-7 0-14 3-19 8l-19 16-31 5c-8 1-14 8-14 16v12c0 7 5 12 12 12z" fill="#F7F4ED"></path>
          <path d="M122 72h52l18 17h-88z" fill="#101820" opacity=".6"></path>
          <rect x="48" y="118" width="224" height="4" fill="#C7F36B" opacity=".8"></rect>
          <circle cx="98" cy="138" r="17" fill="#101820"></circle>
          <circle cx="98" cy="138" r="7" fill="#C7F36B"></circle>
          <circle cx="226" cy="138" r="17" fill="#101820"></circle>
          <circle cx="226" cy="138" r="7" fill="#C7F36B"></circle>
        </symbol>
         <symbol id="v-electric" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 152h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M52 138h216c7 0 12-5 12-12v-14c0-8-6-14-13-16l-26-5-26-22c-5-4-10-6-16-6h-60c-6 0-12 2-16 6l-26 22-26 5c-7 2-13 8-13 16v14c0 7 5 12 12 12z" fill="#C7F36B"></path>
          <path d="M112 68h68l26 22H92z" fill="#101820" opacity=".5"></path>
          <path d="M158 100l-14 20h12l-4 16 18-22h-12z" fill="#101820"></path>
          <circle cx="100" cy="138" r="16" fill="#101820"></circle>
          <circle cx="100" cy="138" r="6" fill="#F7F4ED"></circle>
          <circle cx="222" cy="138" r="16" fill="#101820"></circle>
          <circle cx="222" cy="138" r="6" fill="#F7F4ED"></circle>
        </symbol>
         <symbol id="v-van" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 156h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M54 144h212c7 0 12-5 12-12V80c0-9-7-16-16-16H82c-8 0-15 5-17 13l-12 42c-1 2-2 4-2 7v6c0 7 5 12 12 12z" fill="#A9B9A0"></path>
          <path d="M84 76h48v34H74z" fill="#101820" opacity=".5"></path>
          <path d="M148 76h44v34h-44z" fill="#101820" opacity=".35"></path>
          <circle cx="100" cy="144" r="18" fill="#101820"></circle>
          <circle cx="100" cy="144" r="7" fill="#C7F36B"></circle>
          <circle cx="226" cy="144" r="18" fill="#101820"></circle>
          <circle cx="226" cy="144" r="7" fill="#C7F36B"></circle>
        </symbol>
         <symbol id="v-rv" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 158h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M40 146h228c7 0 12-5 12-12V70c0-9-7-16-16-16H108c-7 0-13 4-15 11L74 118l-30 6c-8 2-14 9-14 17v-2c0 4 4 7 10 7z" fill="#F7F4ED"></path>
          <path d="M120 64h58v40h-72z" fill="#101820" opacity=".5"></path>
          <path d="M196 64h64v40h-64z" fill="#101820" opacity=".35"></path>
          <rect x="30" y="112" width="250" height="7" fill="#C7F36B" opacity=".8"></rect>
          <circle cx="92" cy="146" r="18" fill="#101820"></circle>
          <circle cx="92" cy="146" r="7" fill="#A9B9A0"></circle>
          <circle cx="226" cy="146" r="18" fill="#101820"></circle>
          <circle cx="226" cy="146" r="7" fill="#A9B9A0"></circle>
        </symbol>
         <symbol id="v-camper" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 156h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M56 144h208c7 0 12-5 12-12V86c0-9-7-16-16-16h-96l-30-24c-4-3-8-4-13-4H84c-9 0-16 7-16 16v22l-14 4c-8 2-14 9-14 17v11c0 5 5 8 16 8z" fill="#A9B9A0"></path>
          <path d="M86 66h48v30H86z" fill="#101820" opacity=".5"></path>
          <path d="M158 88h44v28h-44z" fill="#101820" opacity=".35"></path>
          <rect x="46" y="104" width="230" height="6" fill="#C7F36B" opacity=".7"></rect>
          <circle cx="104" cy="144" r="17" fill="#101820"></circle>
          <circle cx="104" cy="144" r="7" fill="#C7F36B"></circle>
          <circle cx="222" cy="144" r="17" fill="#101820"></circle>
          <circle cx="222" cy="144" r="7" fill="#C7F36B"></circle>
        </symbol>
         <symbol id="v-pickup" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 154h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M44 142h232c6 0 11-5 11-11v-24c0-7-5-13-12-14l-22-3-24-28c-4-5-10-8-16-8h-58c-9 0-16 7-16 16v34H56c-7 0-13 6-13 13v14c0 6 3 11 1 11z" fill="url(#gLime)"></path>
          <path d="M150 62h52l20 24h-72z" fill="#101820" opacity=".55"></path>
          <rect x="52" y="106" width="88" height="30" fill="#101820" opacity=".28"></rect>
          <circle cx="98" cy="142" r="18" fill="#101820"></circle>
          <circle cx="98" cy="142" r="7" fill="#A9B9A0"></circle>
          <circle cx="226" cy="142" r="18" fill="#101820"></circle>
          <circle cx="226" cy="142" r="7" fill="#A9B9A0"></circle>
        </symbol>
         <symbol id="v-boxtruck" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 156h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M30 144h150V56H44c-8 0-14 6-14 14z" fill="#F7F4ED"></path>
          <path d="M180 144h94c7 0 12-5 12-12v-26c0-6-4-11-9-13l-26-8-20-26c-4-5-10-8-16-8h-35z" fill="#A9B9A0"></path>
          <path d="M198 62h34l16 22h-50z" fill="#101820" opacity=".5"></path>
          <rect x="44" y="72" width="122" height="56" fill="#101820" opacity=".14"></rect>
          <circle cx="92" cy="144" r="18" fill="#101820"></circle>
          <circle cx="92" cy="144" r="7" fill="#C7F36B"></circle>
          <circle cx="238" cy="144" r="18" fill="#101820"></circle>
          <circle cx="238" cy="144" r="7" fill="#C7F36B"></circle>
        </symbol>
         <symbol id="p-city" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <g fill="#252A2E">
            <rect x="20" y="80" width="42" height="120"></rect>
            <rect x="72" y="46" width="34" height="154"></rect>
            <rect x="116" y="96" width="50" height="104"></rect>
            <rect x="176" y="30" width="38" height="170"></rect>
            <rect x="224" y="88" width="30" height="112"></rect>
            <rect x="264" y="62" width="40" height="138"></rect>
          </g>
          <g fill="#C7F36B" opacity=".85">
            <rect x="30" y="94" width="8" height="8"></rect>
            <rect x="46" y="118" width="8" height="8"></rect>
            <rect x="82" y="60" width="8" height="8"></rect>
            <rect x="82" y="96" width="8" height="8"></rect>
            <rect x="128" y="112" width="8" height="8"></rect>
            <rect x="186" y="46" width="8" height="8"></rect>
            <rect x="186" y="86" width="8" height="8"></rect>
            <rect x="232" y="104" width="8" height="8"></rect>
            <rect x="276" y="78" width="8" height="8"></rect>
            <rect x="276" y="124" width="8" height="8"></rect>
          </g>
          <path d="M0 178h320" stroke="#A9B9A0" strokeWidth="2" opacity=".35" strokeDasharray="26 18"></path>
        </symbol>
         <symbol id="p-airport" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 150h320" stroke="#A9B9A0" strokeWidth="1" opacity=".3"></path>
          <path d="M300 62l-96 34-44-22-18 6 30 26-30 14-26-10-12 6 26 20 6 26 12-6 4-28 32-14 8 40 18-8 8-50 96-34z" fill="url(#gLime)"></path>
          <path d="M0 176h320" stroke="#C7F36B" strokeWidth="3" opacity=".5" strokeDasharray="34 24"></path>
        </symbol>
         <symbol id="p-road" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="url(#gDusk)"></rect>
          <path d="M0 132h320" stroke="#A9B9A0" strokeWidth="1" opacity=".25"></path>
          <path d="M0 200l128-92h64l128 92z" fill="#252A2E"></path>
          <path d="M156 200l4-88h4l4 88z" fill="#C7F36B" opacity=".55"></path>
          <circle cx="240" cy="70" r="26" fill="#C7F36B" opacity=".7"></circle>
        </symbol>
       </defs>
     </svg>
  );
}
