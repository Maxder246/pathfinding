var start = { x: 5, y: 0 };

var end = { x: 10, y: 9 };


var cursor;

var size = 20;

function onLoad() {
    draw();
    find();
}


function draw() {
    var table = document.getElementById('table1');

    var s = '';
    for (var i = 0; i < size; i++) {
        s += '<tr>';
        for (var j = 0; j < size; j++) {
            var color = '';

            if (i == start.y && j == start.x) {
                color = 'green';
            }
            else if (i == end.y && j == end.y) {
                color = 'red';
            }
            s += '<td' + (color != '' ? ' style="background-color: ' + color + '"' : '') + '></td>';
        }

        s += '</tr>'
    }

    table.innerHTML = s;
}

function find() {
    var cursor = start;

    for (var i = 0; i < 15; i++) {
        var currentDist = 1000000;
        var tmpCursor = { x: 0, y: 0 };


        // if (cursor.x > 0) {
        //     tmpCursor.x = cursor.x - 1;
        //     tmpCursor.y = cursor.y;

        //     if (getDiff(tmpCursor, end) <= currentDist) {
        //         currentCursor.x = tmpCursor.x;
        //         currentCursor.y = tmpCursor.y;

        //         currentDist = getDiff(tmpCursor, end);

        //         console.log('links ' + currentDist);
        //     }
        // }
        // if (cursor.y > 0) {
        //     tmpCursor.y = cursor.x;
        //     tmpCursor.x = cursor.y - 1;

        //     if (getDiff(tmpCursor, end) <= currentDist) {
        //         currentCursor.x = tmpCursor.x;
        //         currentCursor.y = tmpCursor.y;

        //         currentDist = getDiff(tmpCursor, end);

        //         console.log('oben ' + currentDist);
        //     }
        // }

        if (cursor.x < size - 1 && getDiff(cursor.x + 1, cursor.y, end.x, end.y) <= currentDist) {
            console.log('rechts');
            currentCursor.x = cursor.x + 1;
            currentCursor.y = cursor.y;

            currentDist = getDiff(tmpCursor, end);
        }

        if (cursor.y < size - 1 && getDiff(cursor.x, cursor.y + 1, end.x, end.y) <= currentDist) {
            console.log('unten');
            currentCursor.x = cursor.x;
            currentCursor.y = cursor.y + 1;

            currentDist = getDiff(tmpCursor, end);
        }

        // if (cursor.y < size - 1) {
        //     tmpCursor.x = cursor.x;
        //     tmpCursor.y = cursor.y + 1;

        //     if (getDiff(tmpCursor, end) <= currentDist) {
        //         currentCursor.x = tmpCursor.x;
        //         currentCursor.y = tmpCursor.y;

        //         console.log('unten ' + currentDist);
        //     }
        // }

        cursor.x = currentCursor.x;
        cursor.y = currentCursor.y;

        console.log(cursor);
        // console.log(getDiff(cursor, end));

        if (cursor.x == end.x & cursor.y == end.y) {
            alert('yeee');
            break;
        }
    }
}

function getDiff(x1, y1, x2, y2) {
    return (Math.abs(x1 - x2) + Math.abs(y1 - y2));
}