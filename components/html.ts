
export const html = `
<body style="border: 0;box-sizing: border-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 auto;padding: 0.5in;text-decoration: none;vertical-align: top;height: 11in;overflow: hidden;width: 8.5in;background: #FFF;border-radius: 1px;box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);">
		<header style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 3em;padding: 0;text-decoration: none;vertical-align: top;">
			<h1 style="border: 0;box-sizing: content-box;color: #FFF;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 1em;padding: 0.5em 0;text-decoration: none;vertical-align: top;font: bold 100% sans-serif;letter-spacing: 0.5em;text-align: center;text-transform: uppercase;background: #000;border-radius: 0.25em;">Invoice</h1>
			<address contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: 75%;font-style: normal;font-weight: inherit;line-height: 1.25;list-style: none;margin: 0 1em 1em 0;padding: 0;text-decoration: none;vertical-align: top;float: left;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;">
				<p style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 0.25em;padding: 0;text-decoration: none;vertical-align: top;">Jonathan Neal</p>
				<p style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 0.25em;padding: 0;text-decoration: none;vertical-align: top;">101 E. Chapman Ave<br style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">Orange, CA 92866</p>
				<p style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 0.25em;padding: 0;text-decoration: none;vertical-align: top;">(800) 555-1234</p>
			</address>
			<span style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 1em 1em;padding: 0;text-decoration: none;vertical-align: top;display: block;float: right;max-height: 25%;max-width: 60%;position: relative;"><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png" style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;display: block;float: right;max-height: 100%;max-width: 100%;"><input type="file" accept="image/*" style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;cursor: pointer;-ms-filter: &quot;progid:DXImageTransform.Microsoft.Alpha(Opacity=0)&quot;;height: 100%;left: 0;opacity: 0;position: absolute;top: 0;width: 100%;"></span>
		</header>
		<article style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 3em;padding: 0;text-decoration: none;vertical-align: top;">
			<h1 style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;font: bold 100% sans-serif;letter-spacing: 0.5em;text-align: center;text-transform: uppercase;clip: rect(0 0 0 0);position: absolute;">Recipient</h1>
			<address contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: 125%;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0 0 3em;padding: 0;text-decoration: none;vertical-align: top;float: left;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;">
				<p style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">Some Company<br style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">c/o Some Guy</p>
			</address>
			<table class="meta" style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: 75%;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 3em;padding: 0;text-decoration: none;vertical-align: top;table-layout: fixed;width: 36%;border-collapse: separate;border-spacing: 2px;float: right;">
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 40%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Invoice #</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 60%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">101138</span></td>
				</tr>
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 40%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Date</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 60%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">January 1, 2012</span></td>
				</tr>
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 40%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Amount Due</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 60%;"><span id="prefix" contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">$</span><span style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">600.00</span></td>
				</tr>
			</table>
			<table class="inventory" style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: 75%;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 3em;padding: 0;text-decoration: none;vertical-align: top;table-layout: fixed;width: 100%;border-collapse: separate;border-spacing: 2px;clear: both;">
				<thead style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
						<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: center;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Item</span></th>
						<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: center;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Description</span></th>
						<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: center;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Rate</span></th>
						<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: center;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Quantity</span></th>
						<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: center;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Price</span></th>
					</tr>
				</thead>
				<tbody style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
						<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 26%;"><a class="cut" style="border: 0;box-sizing: content-box;color: #FFF;font-family: inherit;font-size: .8rem;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: 0;padding: 0.25em 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;display: block;float: left;text-align: center;width: 0.6em;background: #9AF;box-shadow: 0 1px 2px rgba(0,0,0,0.2);background-image: -webkit-linear-gradient(#00ADEE 5%, #0078A5 100%);border-radius: 0.5em;border-color: #0076A3;cursor: pointer;text-shadow: 0 -1px 2px rgba(0,0,0,0.333);opacity: 0;position: absolute;top: 0;left: -1.5em;-webkit-transition: opacity 100ms ease-in;">-</a><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Front End Consultation</span></td>
						<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 38%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Experience Review</span></td>
						<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 12%;"><span data-prefix style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">$</span><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">150.00</span></td>
						<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 12%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">4</span></td>
						<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 12%;"><span data-prefix style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">$</span><span style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">600.00</span></td>
					</tr>
				</tbody>
			</table>
			<a class="add" style="border: 0;box-sizing: content-box;color: #FFF;font-family: inherit;font-size: .8rem;font-style: inherit;font-weight: bold;line-height: inherit;list-style: none;margin: -2.5em 0 0;padding: 0.25em 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;display: block;float: left;text-align: center;width: 0.6em;background: #9AF;box-shadow: 0 1px 2px rgba(0,0,0,0.2);background-image: -webkit-linear-gradient(#00ADEE 5%, #0078A5 100%);border-radius: 0.5em;border-color: #0076A3;cursor: pointer;text-shadow: 0 -1px 2px rgba(0,0,0,0.333);">+</a>
			<table class="balance" style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: 75%;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;table-layout: fixed;width: 36%;border-collapse: separate;border-spacing: 2px;float: right;">
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 50%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Total</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 50%;"><span data-prefix style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">$</span><span style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">600.00</span></td>
				</tr>
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 50%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Amount Paid</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 50%;"><span data-prefix style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">$</span><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">0.00</span></td>
				</tr>
				<tr style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
					<th style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: left;border-radius: 0.25em;border-style: solid;background: #EEE;border-color: #BBB;width: 50%;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Balance Due</span></th>
					<td style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0.5em;text-decoration: none;vertical-align: top;border-width: 1px;position: relative;text-align: right;border-radius: 0.25em;border-style: solid;border-color: #DDD;width: 50%;"><span data-prefix style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">$</span><span style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">600.00</span></td>
				</tr>
			</table>
		</article>
		<aside style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">
			<h1 style="border: none;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0 0 1em;padding: 0;text-decoration: none;vertical-align: top;font: bold 100% sans-serif;letter-spacing: 0.5em;text-align: center;text-transform: uppercase;border-width: 0 0 1px;border-color: #999;border-bottom-style: solid;"><span contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;display: inline-block;">Additional Notes</span></h1>
			<div contenteditable style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;border-radius: 0.25em;min-width: 1em;outline: 0;cursor: pointer;">
				<p style="border: 0;box-sizing: content-box;color: inherit;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;line-height: inherit;list-style: none;margin: 0;padding: 0;text-decoration: none;vertical-align: top;">A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
			</div>
		</aside>
	</body>
	
	`