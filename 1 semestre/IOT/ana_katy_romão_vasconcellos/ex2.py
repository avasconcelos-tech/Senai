from machine import Pin, PWM
from utime import sleep

led_pwm = PWM(Pin(15))
led_pwm.freq(1000)

while True:
    led_pwm.duty_u16(65535)
    sleep(1.5)
    led_pwm.duty_u16(63000)
    sleep(1.5)
    led_pwm.duty_u16(33000)
    sleep(1.5)
    led_pwm.duty_u16(15000)
    sleep(1.5)
    led_pwm.duty_u16(8000)
    sleep(1.5)
    led_pwm.duty_u16(1000)
    sleep(1.5)
    led_pwm.duty_u16(100)
    sleep(1.5)
    led_pwm.duty_u16(0)
    sleep(1.5)
    