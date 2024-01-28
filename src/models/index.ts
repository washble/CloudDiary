//import DB_Connection from '../data/db_connection'

export default class IndexModel {

    public getData = async () => {
        // let query = "SELECT ss_isuKorAbbrv FROM stocksector WHERE ss_isuSrtCd = ?";
        // let result = await DB_Connection.getInstance().connection_query(query, "000020");

        let result = 'EXPRESS'

        return result;
    }
}
