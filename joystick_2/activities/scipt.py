import serial
from .models import Note


ser = serial.Serial('/dev/cu.usbmodem1411', 9600)
# while True:
line = ser.read(18)
print(line)

Note.objects.create("Body":2, "Key":3)