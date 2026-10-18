# C/C++ IP-Address Validation Program (Printed Solution Code, Continuation)

- **Source image:** `12_ip-validation-cpp-code.jpg` (original file name `496845871_9767686456680251_469097462674319078_n.jpg`)
- **Page:** 12 of 22 (folder-wide position)
- **Paper / Post:** Not shown on this page (page carries only the "Question Bank / Written" running heads of the COMPACT IT JOB SOLUTION booklet; the question statement and paper banner are on the preceding page)
- **Exam date:** not shown
- **Marks:** not shown
- **Prepared by:** COMPACT IT JOB SOLUTION

## Transcription Notes

- The page begins **mid-code**: the first visible line is `using namespace std;`, so the `#include` directives and the question number/wording sit on the previous page and are **not** visible here.
- The code is **cut off at the bottom** inside `int main(){` — the `main()` body is incomplete on this page.
- The page uses a two-column table (Question / Answer); this transcription records the code exactly as printed, preserving the original line breaks and the slightly irregular brace/indent layout of the print.
- No handwritten marginalia are present on this page.

## Content

*(running heads: "Question Bank" — "Written"; printed as a two-column Question / Answer solution layout)*

```cpp
using namespace std;
#define DELIM "."
bool valid_part(char* s){
    int n = strlen(s);
    if (n > 3)
        return false;
    for (int i = 0; i < n; i++)
        if ((s[i] >= '0' && s[i] <= '9') == false)
            return false;
    string str(s);
    if (str.find('0') == 0 && n > 1)
        return false;
    stringstream geek(str);
    int x;
    geek >> x;
    return (x >= 0 && x <= 255);
}
int is_valid_ip(char* ip_str){
    if (ip_str == NULL)
        return 0;

    int i, num, dots = 0;
    int len = strlen(ip_str);
    int count = 0;
    for (int i = 0; i < len; i++)
        if (ip_str[i] == '.')
            count++;
    if (count != 3)
        return false;
    char *ptr = strtok(ip_str, DELIM);
    if (ptr == NULL)
        return 0;

    while (ptr) {
        if (valid_part(ptr)){
            ptr = strtok(NULL, ".");
            if (ptr != NULL)
                ++dots;
        }
        else
            return 0;
    }
    if (dots != 3)
        return 0;
    return 1;
}
int main(){
    char ip1[] = "128.0.0.1";
    char ip2[] = "125.16.100.1";
    char ip3[] = "125.512.100.1";
    char ip4[] = "125.512.100.abc";
```

*[code continues on the next page — cut off]*