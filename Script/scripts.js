function openStatsRepo() {

    let url = 'https://github.com/eden4422/Personal-Well-Being-Stats/tree/main';
    window.open(url, '_blank');
}

function openChessRepo() {

    let url = 'https://github.com/eden4422/Chess-Game';
    window.open(url, '_blank');
}

function partition(arr, low, high){

    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++){

        if (arr[j] < pivot){
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high)
    return (i + 1)
}

function swap(arr, i, j){

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort (arr, low, high){

    if (low < high){

        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }

    return arr;
}

module.exports = {
    quickSort: quickSort,
};