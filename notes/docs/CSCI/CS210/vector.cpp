using namespace std;

bool sortDescending(int i, int j) {
    return i > j;
}

int main() {
    unsigned int i;
    vector<int> numsVec;
    numsVec.push_back(3);
    numsVec.push_back(9);
    numsVec.push_back(4);
    numsVec.push_back(1);
    numsVec.push_back(6);

    sort(numsVec.begin(), numsVec.end(), sortDescending);

    cout << "Sorted Vector: ";

    for (i=0;i<numsVec.size();i++) {
        cout << numsVec.at(i) << " ";
    }

    cout << endl;
}
