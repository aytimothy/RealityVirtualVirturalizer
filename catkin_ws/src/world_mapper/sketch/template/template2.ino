#inlude <bool.h>

bool exitFlag = false;
void setup();
void loop();

int main (int argc, char** argv) {
  setup();

  while (exitFlag == false) {
    loop();
  }
}

void setup() {

}

void loop() {

}