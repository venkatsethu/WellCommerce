fos.Router.setData({"base_url":"","routes":{"admin.attribute.ajax.index":{"tokens":[["text","\/admin\/attribute\/ajax\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute.ajax.add":{"tokens":[["text","\/admin\/attribute\/ajax\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute.ajax.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/ajax\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute.ajax.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/ajax\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_group.add":{"tokens":[["text","\/admin\/attribute\/group\/group\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_group.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/group\/group\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_group.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/group\/group\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_group.ajax.index":{"tokens":[["text","\/admin\/attribute\/group\/group\/ajax\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_value.ajax.index":{"tokens":[["text","\/admin\/attribute\/value\/value\/ajax\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_value.ajax.add":{"tokens":[["text","\/admin\/attribute\/value\/value\/ajax\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_value.ajax.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/value\/value\/ajax\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.attribute_value.ajax.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/attribute\/value\/value\/ajax\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.availability.grid":{"tokens":[["text","\/admin\/availability\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.availability.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/availability\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.availability.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/availability\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.cart.index":{"tokens":[["text","\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.cart.add":{"tokens":[["variable",",","[^\/]++","quantity"],["variable",",","[^\/,]++","attribute"],["variable","\/","[^\/,]++","id"],["text","\/add"]],"defaults":{"attribute":"null","quantity":"1"},"requirements":[],"hosttokens":[]},"front.cart.edit":{"tokens":[["variable",",","[^\/]++","quantity"],["variable","\/","[^\/,]++","id"],["text","\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.cart.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.category.index":{"tokens":[["text","\/admin\/catalog\/category\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.category.grid":{"tokens":[["text","\/admin\/catalog\/category\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.category.add":{"tokens":[["text","\/admin\/catalog\/category\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.category.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/category\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.category.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/category\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.contact.grid":{"tokens":[["text","\/admin\/cms\/contact\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.contact.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/contact\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.contact.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/contact\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.currency.grid":{"tokens":[["text","\/admin\/configuration\/intl\/currency\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.currency.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/currency\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.currency.sync":{"tokens":[["text","\/admin\/configuration\/intl\/currency\/sync"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.currency.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/currency\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.deliverer.grid":{"tokens":[["text","\/admin\/catalog\/deliverer\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.deliverer.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/deliverer\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.deliverer.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/deliverer\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.index":{"tokens":[["text","\/admin\/configuration\/intl\/dictionary\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.grid":{"tokens":[["text","\/admin\/configuration\/intl\/dictionary\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.add":{"tokens":[["text","\/admin\/configuration\/intl\/dictionary\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/dictionary\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.sync":{"tokens":[["text","\/admin\/configuration\/intl\/dictionary\/sync"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.dictionary.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/dictionary\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.package.grid":{"tokens":[["text","\/admin\/distribution\/package\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.package.require":{"tokens":[["variable",",","[^\/]++","id"],["variable","\/","[^\/,]++","operation"],["text","\/admin\/distribution\/package"]],"defaults":{"operation":"require"},"requirements":[],"hosttokens":[]},"admin.package.update":{"tokens":[["variable",",","[^\/]++","id"],["variable","\/","[^\/,]++","operation"],["text","\/admin\/distribution\/package"]],"defaults":{"operation":"update"},"requirements":[],"hosttokens":[]},"admin.package.remove":{"tokens":[["variable",",","[^\/]++","id"],["variable","\/","[^\/,]++","operation"],["text","\/admin\/distribution\/package"]],"defaults":{"operation":"remove"},"requirements":[],"hosttokens":[]},"admin.package.sync":{"tokens":[["text","\/admin\/distribution\/package\/sync"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.package.console":{"tokens":[["variable",",","[^\/]++","operation"],["variable",",","[^\/,]++","port"],["variable","\/","[^\/,]++","id"],["text","\/admin\/distribution\/package\/console"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.layered_navigation.filter":{"tokens":[["text","\/filter"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.layout_box.grid":{"tokens":[["text","\/admin\/layout\/box\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.layout_box.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/layout\/box\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.layout_box.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/layout\/box\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.locale.grid":{"tokens":[["text","\/admin\/configuration\/intl\/locale\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.locale.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/locale\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.locale.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/intl\/locale\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shop.grid":{"tokens":[["text","\/admin\/configuration\/multistore\/shop\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shop.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/multistore\/shop\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shop.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/multistore\/shop\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shop.change_context":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/multistore\/shop\/change"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.company.grid":{"tokens":[["text","\/admin\/configuration\/multistore\/company\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.company.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/multistore\/company\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.company.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/multistore\/company\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.coupon.add":{"tokens":[["text","\/coupon\/add"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.coupon.delete":{"tokens":[["text","\/coupon\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.coupon.grid":{"tokens":[["text","\/admin\/promotion\/coupon\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.coupon.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/promotion\/coupon\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.coupon.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/promotion\/coupon\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client.grid":{"tokens":[["text","\/admin\/crm\/client\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/crm\/client\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/crm\/client\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client_group.grid":{"tokens":[["text","\/admin\/crm\/client\/group\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client_group.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/crm\/client\/group\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.client_group.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/crm\/client\/group\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.media.grid":{"tokens":[["text","\/admin\/cms\/media\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.media.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/media\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.media.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/media\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.news.grid":{"tokens":[["text","\/admin\/cms\/news\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.news.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/news\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.news.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/news\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user.grid":{"tokens":[["text","\/admin\/user\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/user\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/user\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user_group.grid":{"tokens":[["text","\/admin\/user\/group\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user_group.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/user\/group\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.user_group.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/user\/group\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order.grid":{"tokens":[["text","\/admin\/order\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order.products.grid":{"tokens":[["text","\/admin\/order\/products\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status.grid":{"tokens":[["text","\/admin\/order\/status\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/status\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/status\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status_group.grid":{"tokens":[["text","\/admin\/order\/status\/group\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status_group.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/status\/group\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.order_status_group.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/order\/status\/group\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.page.grid":{"tokens":[["text","\/admin\/cms\/page\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.page.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/page\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.page.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/cms\/page\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.payment.index":{"tokens":[["text","\/payment\/index"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.payment_method.grid":{"tokens":[["text","\/admin\/configuration\/payment\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.payment_method.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/payment\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.payment_method.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/payment\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.producer.grid":{"tokens":[["text","\/admin\/catalog\/producer\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.producer.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/producer\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.producer.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/producer\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product.grid":{"tokens":[["text","\/admin\/catalog\/product\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product.duplicate":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/duplicate"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product.update":{"tokens":[["text","\/admin\/catalog\/product\/update"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product_status.grid":{"tokens":[["text","\/admin\/catalog\/product\/status\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product_status.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/status\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.product_status.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/status\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.sales_report.grid":{"tokens":[["text","\/admin\/report\/sales\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.sales_report.view":{"tokens":[["text","\/admin\/report\/sales\/view"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.review.grid":{"tokens":[["text","\/admin\/catalog\/product\/review\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.review.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/review\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.review.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/catalog\/product\/review\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.routing.grid":{"tokens":[["text","\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.routing.generate":{"tokens":[["text","\/generate"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.routing.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.routing.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"front.search.index":{"tokens":[["variable",",","[\\d+_]+","attributes"],["variable",",","[\\d+_]+","producers"],["variable",",","grid|list","view"],["variable",",","\\d{1,10}","priceTo"],["variable",",","\\d{1,10}","priceFrom"],["variable",",","asc|desc","orderDir"],["variable",",","name|finalPrice|score","orderBy"],["variable",",","\\d{1,10}","limit"],["variable",",","\\d{1,10}","page"],["variable","\/","[^,]+","phrase"],["text","\/search\/index"]],"defaults":{"phrase":"null","page":"1","limit":"12","orderBy":"score","orderDir":"asc","priceFrom":"0","priceTo":"9999","view":"grid","producers":"null","attributes":"null"},"requirements":{"phrase":"[^,]+","limit":"\\d{1,10}","page":"\\d{1,10}","orderBy":"name|finalPrice|score","orderDir":"asc|desc","priceFrom":"\\d{1,10}","priceTo":"\\d{1,10}","view":"grid|list","producers":"[\\d+_]+","attributes":"[\\d+_]+"},"hosttokens":[]},"front.search.view":{"tokens":[["variable","\/","[^,]+","phrase"],["text","\/search\/view"]],"defaults":{"phrase":"null"},"requirements":{"phrase":"[^,]+"},"hosttokens":[]},"admin.shipping_method.grid":{"tokens":[["text","\/admin\/configuration\/shipping\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shipping_method.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/shipping\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.shipping_method.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/shipping\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.tax.grid":{"tokens":[["text","\/admin\/configuration\/tax\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.tax.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/tax\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.tax.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/configuration\/tax\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.theme.grid":{"tokens":[["text","\/admin\/layout\/theme\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.theme.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/layout\/theme\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.theme.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/layout\/theme\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.unit.grid":{"tokens":[["text","\/admin\/unit\/grid"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.unit.edit":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/unit\/edit"]],"defaults":[],"requirements":[],"hosttokens":[]},"admin.unit.delete":{"tokens":[["variable","\/","[^\/]++","id"],["text","\/admin\/unit\/delete"]],"defaults":[],"requirements":[],"hosttokens":[]},"bazinga_jstranslation_js":{"tokens":[["variable",".","js|json","_format"],["variable","\/","[\\w]+","domain"],["text","\/translations"]],"defaults":{"domain":"messages","_format":"js"},"requirements":{"_format":"js|json","domain":"[\\w]+"},"hosttokens":[]}},"prefix":"","host":"localhost","scheme":"http"});