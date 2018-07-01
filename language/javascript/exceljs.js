const { Workbook } = require('exceljs')

async function main() {
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('sheet')

    worksheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Age', key: 'age', width: 10 }
    ]
    worksheet.addRow({ id: 1, name: 'aa', age: 17 })
    worksheet.eachRow(row => console.log(row.values))

    // await workbook.xlsx.writeFile('a.xlsx')
    // response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    // response.setHeader('Content-Disposition', 'attachment;filename=' + 'a.xlsx')
}

if (require.main === module) {
    main()
}
