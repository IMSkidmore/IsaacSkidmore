import tkinter as tk
import random
import time

def roll_d20():
    result_label.config(text="Rolling...")
    app.update()

    for _ in range(10):
        dice_value = random.randint(1, 20)
        result_label.config(text=f"Rolled: {dice_value}")
        app.update()
        time.sleep(0.1)

    result_label.config(text=f"Final Result: {dice_value}")

# Create the main window
app = tk.Tk()
app.title("D20 Roller")

# Create a label for displaying the result
result_label = tk.Label(app, text="")
result_label.pack(pady=10)

# Create a button to roll the D20
roll_button = tk.Button(app, text="Roll D20", command=roll_d20)
roll_button.pack(pady=10)

# Run the main loop
app.mainloop()
