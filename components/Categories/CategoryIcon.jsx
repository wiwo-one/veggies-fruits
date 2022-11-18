import React from "react";

function CategoryIcon({ icon, fill }) {
  switch (icon) {
    case "carrot":
      return (
        <svg width={512} height={512} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_731_151)">
            <path
              d="M369.8 142.2C392.5 94.7 380.8 38.4 334.4 0C289.9 36.9 277.7 90 297 136.1C283 131.2 268.7 128 254.5 128C206.5 128 160.4 154.8 137.9 200.8L2.4 478.3C-0.599999 484.5 -0.899999 492.1 2.4 498.8C6.5 507.1 14.8 511.9 23.4 511.9C26.8 511.9 30.3 511.1 33.7 509.5L311.3 374C336.3 361.8 357.7 341.4 370.9 314.4C386.6 282.3 387.8 246.8 377 215.5C422.9 234.2 475.4 221.8 512.1 177.6C473.5 131.2 417.3 119.5 369.8 142.2V142.2ZM327.7 293.4C319.6 309.9 306.7 322.9 290.2 330.9L232.9 358.9L209 335C199.6 325.6 184.4 325.6 175.1 335C165.8 344.4 165.7 359.6 175.1 368.9L187.3 381.1L76.9 435.1L173 238.3L207 273C211.7 277.7 217.8 280 224 280C230.2 280 236.3 277.7 241 273C250.4 263.6 250.4 248.4 241 239.1L199.4 198.2C214.2 184.5 233.4 176.1 254.5 176.1C266.9 176.1 278.9 178.9 290.2 184.4C309.8 194 324.5 210.6 331.6 231.2C338.6 251.7 337.3 273.9 327.7 293.4Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="clip0_731_151">
              <rect width={512} height={512} fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "apple":
      return (
        <svg width={448} height={512} viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M415.22 177.62C396.69 151.15 371.23 134.45 341.64 129.34H341.61C307.12 123.36 255.47 138.5 224.01 153.11C192.55 138.5 141.06 123.34 106.37 129.34C76.7801 134.45 51.3201 151.15 32.7901 177.62C4.85009 217.5 -6.54991 280.12 3.73009 337.17C18.9701 421.69 69.9601 512 167.23 512C180.67 512 194.85 507.97 209.44 500.03C218.44 495.15 229.56 495.15 238.56 500.03C253.15 507.97 267.34 512 280.77 512C378.03 512 429.02 421.69 444.27 337.16C454.55 280.12 443.15 217.5 415.22 177.62V177.62ZM397.03 328.64C392.97 351.25 368.19 464 280.77 464C275.52 464 268.87 461.88 261.49 457.88C249.93 451.58 236.96 448.43 224 448.43C211.04 448.43 198.07 451.59 186.51 457.88C179.14 461.88 172.48 464 167.23 464C79.8101 464 55.0301 351.25 50.9701 328.66C42.9701 284.27 51.4701 234.63 72.0901 205.16C83.2801 189.18 97.5501 179.58 114.52 176.66C127.07 174.5 168.35 176.59 224 207.41C279.68 176.57 321 174.47 333.48 176.66C350.45 179.58 364.72 189.18 375.91 205.16C396.53 234.62 405.03 284.27 397.03 328.64ZM222.41 112C241.07 112 274.5 108.74 295.61 87.62C326.17 57.06 319.32 0.65 319.32 0.65C319.32 0.65 313.93 0 305.57 0C286.91 0 253.48 3.27 232.38 24.38C201.82 54.95 208.67 111.35 208.67 111.35C208.67 111.35 214.06 112 222.41 112Z"
            fill={fill}
          />
        </svg>
      );
    case "shopping-basket":
      return (
        <svg width={576} height={512} viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M564 192H491.098L362.286 40.4573C353.703 30.3583 338.557 29.1303 328.456 37.7143C318.357 46.2983 317.129 61.4453 325.714 71.5443L428.102 192H147.899L250.287 71.5433C258.871 61.4443 257.643 46.2973 247.544 37.7133C237.445 29.1293 222.298 30.3583 213.714 40.4563L84.901 192H12C5.373 192 0 197.373 0 204V228C0 234.627 5.373 240 12 240H30.667L58.251 438.603C61.546 462.334 81.836 480 105.794 480H470.206C494.164 480 514.454 462.334 517.75 438.603L545.333 240H564C570.627 240 576 234.627 576 228V204C576 197.373 570.627 192 564 192ZM470.206 432H105.794L79.127 240H496.872L470.206 432ZM312 296V376C312 389.255 301.255 400 288 400C274.745 400 264 389.255 264 376V296C264 282.745 274.745 272 288 272C301.255 272 312 282.745 312 296ZM424 296V376C424 389.255 413.255 400 400 400C386.745 400 376 389.255 376 376V296C376 282.745 386.745 272 400 272C413.255 272 424 282.745 424 296ZM200 296V376C200 389.255 189.255 400 176 400C162.745 400 152 389.255 152 376V296C152 282.745 162.745 272 176 272C189.255 272 200 282.745 200 296Z"
            fill={fill}
          />
        </svg>
      );
    case "bakery":
      return (
        <svg width={512} height={512} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_732_161)">
            <path
              d="M507.72 168C494.025 132.135 467.965 102.344 434.24 83.9999C430.937 67.1374 421.636 52.0427 408.06 41.5099C372.815 14.6927 329.777 0.117378 285.49 -0.000141292C269.944 0.115086 254.465 2.05162 239.37 5.76986C224.839 -0.417068 208.681 -1.67107 193.37 2.19986C147.138 13.697 104.909 37.5674 71.2173 71.2489C37.5252 104.93 13.6416 147.151 2.1299 193.38C-1.59578 208.531 -0.369162 224.477 5.6299 238.88C-1.23083 267.839 -1.58478 297.959 4.59353 327.071C10.7718 356.183 23.3287 383.563 41.3599 407.24C51.6802 420.535 66.3881 429.732 82.8599 433.19C101.321 467.457 131.522 493.916 167.92 507.71C214.71 525.42 263.26 485.71 255.03 436.31L239.18 341.24C240.716 339.415 242.158 337.512 243.5 335.54C261.659 334.754 278.867 327.202 291.74 314.37L314.38 291.75C327.32 278.81 334.16 261.8 335.23 244.17C337.53 242.692 339.741 241.079 341.85 239.34L436.3 255.08C486.12 263.38 525.32 214.36 507.72 168V168ZM111.81 382.26C100.3 391.26 86.0199 386.65 79.5299 378.14C57.6799 349.5 47.6699 314.89 48.6899 280.2C49.7899 280.59 50.7499 281.2 51.8699 281.53L187.15 323.14L111.81 382.26ZM184.94 462.84C164.839 455.127 147.348 441.854 134.51 424.57C136.911 423.188 139.228 421.665 141.45 420.01L196.45 376.85L207.68 444.2C208.156 447.139 207.852 450.151 206.798 452.935C205.745 455.72 203.978 458.179 201.676 460.066C199.373 461.953 196.616 463.203 193.679 463.69C190.741 464.176 187.728 463.883 184.94 462.84V462.84ZM280.43 257.84L257.81 280.46C254.524 283.746 250.404 286.075 245.893 287.196C241.383 288.316 236.652 288.186 232.21 286.82L65.9999 235.66C59.7393 233.736 54.4554 229.483 51.2368 223.779C48.0182 218.075 47.1102 211.354 48.6999 205C58.1118 167.22 77.6332 132.716 105.169 105.191C132.705 77.6654 167.217 58.1572 205 48.7599C211.343 47.1707 218.054 48.072 223.753 51.2786C229.452 54.4852 233.706 59.7533 235.64 65.9999L286.79 232.18C288.163 236.626 288.297 241.363 287.176 245.88C286.055 250.396 283.723 254.521 280.43 257.81V257.84ZM323.38 187.95L281.53 51.9499C281.14 50.7099 280.53 49.5899 280.11 48.3899C281.9 48.3099 283.69 48.0099 285.48 48.0099C319.259 48.0178 352.099 59.1319 378.94 79.6399C387.52 86.1799 392.02 100.49 383.06 111.91L323.38 187.95ZM444.2 207.74L377.56 196.64L420.82 141.52C422.379 139.42 423.818 137.233 425.13 134.97C442.139 147.772 455.206 165.098 462.84 184.97C463.89 187.76 464.189 190.777 463.705 193.718C463.222 196.66 461.973 199.422 460.085 201.729C458.197 204.036 455.735 205.805 452.947 206.86C450.159 207.915 447.142 208.219 444.2 207.74Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="clip0_732_161">
              <rect width={512} height={512} fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg width={576} height={512} viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_732_176)">
            <path
              d="M272 240C272 244.243 273.686 248.313 276.686 251.314C279.687 254.314 283.757 256 288 256H304C308.243 256 312.313 254.314 315.314 251.314C318.314 248.313 320 244.243 320 240V208H400V256H448V192C448 183.513 444.629 175.374 438.627 169.373C432.626 163.371 424.487 160 416 160H320V96C320 70.5392 309.886 46.1212 291.882 28.1177C273.879 10.1143 249.461 0 224 0C198.539 0 174.121 10.1143 156.118 28.1177C138.114 46.1212 128 70.5392 128 96V160H32C23.5131 160 15.3737 163.371 9.37258 169.373C3.37142 175.374 0 183.513 0 192L0 448C0 456.487 3.37142 464.626 9.37258 470.627C15.3737 476.629 23.5131 480 32 480H160V432H48V208H128V240C128 244.243 129.686 248.313 132.686 251.314C135.687 254.314 139.757 256 144 256H160C164.243 256 168.313 254.314 171.314 251.314C174.314 248.313 176 244.243 176 240V208H272V240ZM176 160V96C176 83.2696 181.057 71.0606 190.059 62.0589C199.061 53.0571 211.27 48 224 48C236.73 48 248.939 53.0571 257.941 62.0589C266.943 71.0606 272 83.2696 272 96V160H176ZM544 288H224C215.513 288 207.374 291.371 201.373 297.373C195.371 303.374 192 311.513 192 320V480C192 488.487 195.371 496.626 201.373 502.627C207.374 508.629 215.513 512 224 512H544C552.487 512 560.626 508.629 566.627 502.627C572.629 496.626 576 488.487 576 480V320C576 311.513 572.629 303.374 566.627 297.373C560.626 291.371 552.487 288 544 288ZM432 336C432 348.73 426.943 360.939 417.941 369.941C408.939 378.943 396.73 384 384 384C371.27 384 359.061 378.943 350.059 369.941C341.057 360.939 336 348.73 336 336H432ZM528 464H240V336H288.3C289.87 383.4 324.1 425.12 371.37 431.19C384.923 432.969 398.7 431.837 411.781 427.869C424.863 423.901 436.947 417.188 447.228 408.179C457.509 399.17 465.75 388.072 471.401 375.625C477.053 363.179 479.984 349.67 480 336H528V464Z"
              fill={fill}
            />
          </g>
          <defs>
            <clipPath id="clip0_732_176">
              <rect width={576} height={512} fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
  }

  return <div>CategoryIcon</div>;
}

export default CategoryIcon;