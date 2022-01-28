import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import theme from '../../theme';

class MyDocument extends Document<DocumentProps> {
	render(): JSX.Element {
		// @ts-ignore
		// @ts-ignore
		// @ts-ignore
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#a78bfa" />
					<link rel="manifest" href="./site.webmanifest" />
					<link
						href="./assets/icons/icon-16x16.png"
						rel="icon"
						type="image/png"
						sizes="16x16"
					/>
					<link
						href="./assets/icons/icon-32x32.png"
						rel="icon"
						type="image/png"
						sizes="32x32"
					/>
					<link rel="apple-touch-icon" href="./assets/icons/icon-32x32.png"></link>
					<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>

					{/* Meta Pixel Code */}
					<script>{`
						!function(f, b, e, v, n, t, s) {
							if (f.fbq) return;
							n = f.fbq = function() {
								n.callMethod ?
									n.callMethod.apply(n, arguments) : n.queue.push(arguments)
							};
							if (!f._fbq) f._fbq = n;
							n.push = n;
							n.loaded = !0;
							n.version = '2.0';
							n.queue = [];
							t = b.createElement(e);
							t.async = !0;
							t.src = v;
							s = b.getElementsByTagName(e)[0];
							s.parentNode.insertBefore(t, s)
						}(window, document, 'script',
							'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '2083138725178222');
						fbq('track', 'PageView');
					`}</script>
					<noscript>
						<img
							height="1"
							width="1"
							style={{ display: 'none' }}
							src="https://www.facebook.com/tr?id=2083138725178222&ev=PageView&noscript=1"
						/>
					</noscript>
					{/* End Meta Pixel Code */}
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
