import tkinter as tk
from tkinter import simpledialog
import openpyxl
from openpyxl.chart import BarChart, Reference
import subprocess

def on_button_click():
    user_input = simpledialog.askstring("Input", "Enter data (comma-separated):")
    data = [int(x.strip()) for x in user_input.split(',')]

    # Create Excel workbook and add data
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    sheet.append(data)

    # Create a bar chart
    chart = BarChart()
    chart.add_data(Reference(sheet, min_col=1, min_row=1, max_col=len(data), max_row=1))
    sheet.add_chart(chart, "C3")

    # Save the workbook
    file_path = "graph_data.xlsx"
    workbook.save(file_path)

    label.config(text=f"Data saved and graph created in '{file_path}'. Opening Excel...")

    # Automatically open the Excel file
    subprocess.Popen(["start", "excel", file_path], shell=True)

# Create the main window
app = tk.Tk()
app.title("Data Input and Excel Graph")

# Create a label
label = tk.Label(app, text="Enter data and click the button to create a graph.")
label.pack(pady=10)

# Create a button
button = tk.Button(app, text="Click me!", command=on_button_click)
button.pack(pady=10)

# Run the main loop
app.mainloop()
