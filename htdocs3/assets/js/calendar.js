////////////////////////////////////////////////////////////
//カレンダー表示処理
////////////////////////////////////////////////////////////

//以下のサイト様からソースをいただきました。ありがとうございます。
//http://cly7796.net/

//営業日と休業日を配列で指定
var eigyoArray = [0,1,2,4,5,6]; //営業日: 日0 月1 火2 水3 木4 金5 土6
//var eigyoArray = [1,2,5,6]; //営業日: 日0 月1 火2 水3 木4 金5 土6
var kyugyoArray = [23]; //休業日

//クラス名
var table_ClassName = 'calendar';

function show_calendar() {
    // 現在の年月の取得
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;

    month =2;
    //console.log(month);

    var wrapper = document.getElementById('calendar');

    //カレンダー表示関数呼び出し
    add_calendar(wrapper, year, month);
}

/**
 * 指定した年月のカレンダーを表示する
 * @param {object} wrapper - カレンダーを追加する親要素
 * @param {number} year    - 年の指定
 * @param {number} month   - 月の指定
 */
function add_calendar(wrapper, year, month) {
    // 現在カレンダーが追加されている場合は一旦削除する
    wrapper.textContent = null;

    // カレンダーに表示する内容を取得
    var bodyData = generate_month_calendar(year, month);

    // カレンダーの要素を追加
    wrapper.appendChild(bodyData);
}

/**
 * 指定した年月のカレンダー要素を生成して返す
 * @param {number} year  - 年の指定
 * @param {number} month - 月の指定
 */
function generate_month_calendar(year, month) {
    var weekdayData = ['日', '月', '火', '水', '木', '金', '土'];
    // カレンダーの情報を取得
    var calendarData = get_month_calendar(year, month);

    var i = calendarData[0]['weekday']; // 初日の曜日を取得
    // カレンダー上の初日より前を埋める
    while(i > 0) {
        i--;
        calendarData.unshift({
            day: '',
            weekday: i
        });
    }
    var i = calendarData[calendarData.length - 1]['weekday']; // 末日の曜日を取得
    // カレンダー上の末日より後を埋める
    while(i < 6) {
        i++;
        calendarData.push({
            day: '',
            weekday: i
        });
    }

    // カレンダーの要素を生成
    var cTable = document.createElement('table');
    cTable.className = table_ClassName;

    var insertData = '';
    // 曜日部分の生成
    insertData += '<thead>';
    insertData += '<tr>';
    for (var i = 0; i < weekdayData.length; i++) {
        insertData += '<th class="' + table_ClassName + '__th' + '">';
        insertData += weekdayData[i];
        insertData += '</th>';
    }
    insertData += '</tr>';
    insertData += '</thead>';

    // 日付部分の生成
    insertData += '<tbody>';
    for (var i = 0; i < calendarData.length; i++) {
        if(calendarData[i]['weekday'] <= 0) {
            insertData += '<tr class="' + table_ClassName + '__tr' + '">';
        }

        //営業日判定処理
        if(calendarData[i]['day'] === ''){
            insertData += '<td>';
        }else{
            var eigyoFlag = false;
            if(eigyoArray.includes(calendarData[i]['weekday'])){
                var mynum = Number(calendarData[i]['day']);
                if(kyugyoArray.includes(mynum)===false){
                    eigyoFlag = true;
                }
            }
            if(eigyoFlag===true){
              //insertData += '<td class="' + table_ClassName + '__td is-eigyo">';
              insertData += '<td class="' + table_ClassName + '__td">';
            }else{
                insertData += '<td class="' + table_ClassName + '__td is-kyugyo">';
            }
        }

        insertData += calendarData[i]['day'];
        insertData += '</td>';
        if(calendarData[i]['weekday'] >= 6) {
            insertData += '</tr>';
        }
    }
    insertData += '</tbody>';
    insertData += '<tfoot class="' + table_ClassName + '__ft"><tr>';
    insertData += '<td colspan="7">';
    insertData += '<tr></tfoot>';

    cTable.innerHTML = insertData;
    return cTable;
}

/**
 * 指定した年月のカレンダー情報を返す
 * @param {number} year  - 年の指定
 * @param {number} month - 月の指定
 */
function get_month_calendar(year, month) {
    var firstDate = new Date(year, (month - 1), 1); // 指定した年月の初日の情報
    var lastDay = new Date(year, (firstDate.getMonth() + 1), 0).getDate(); // 指定した年月の末日
    var weekday = firstDate.getDay(); // 指定した年月の初日の曜日

    var calendarData = []; // カレンダーの情報を格納
    var weekdayCount = weekday; // 曜日のカウント用
    for (var i = 0; i < lastDay; i++) {
        calendarData[i] = {
            day: i + 1,
            weekday: weekdayCount
        }
        // 曜日のカウントが6(土曜日)まできたら0(日曜日)に戻す
        if(weekdayCount >= 6) {
            weekdayCount = 0;
        } else {
            weekdayCount++;
        }
    }
    return calendarData;
}