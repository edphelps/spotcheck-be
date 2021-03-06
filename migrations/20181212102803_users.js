exports.up = function(knex, Promise) {
	return knex.schema.createTable(`users`, function(table) {
		// TABLE COLUMN DEFINITIONS HERE
		table.increments().notNullable().primary()
		table.varchar(`name`, 255).notNullable()
		table.varchar(`email`, 255).notNullable()
		table.unique('email')
		table.varchar(`pswd_hash`, 255).notNullable()
		table.varchar(`dog_names`, 255).notNullable()
	})
}
exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists(`users`)
}
