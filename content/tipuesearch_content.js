<<<<<<< HEAD
var tipuesearch = {"pages": [{'title': 'About', 'text': 'cdtemplate \n https://mde.tw/pjcopsim \n 靜態網站 \n 倉儲 \n 41023236 黃柏閎 \n 41023240 葉桓亞 \n 41023241 詹耀賢 \n', 'tags': '', 'url': 'About.html'}, {'title': '41023244-1', 'text': '41023244倉儲 \n \n \n \n \n \n', 'tags': '', 'url': '41023244-1.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023236', 'text': '這週是讓我們先熟習怎麼樣同時操控兩台車子去讓他行走，還有讓他能觸碰方塊並推著方塊走，但是實際去糙做的時候遇到的問題是不知道怎麼讓車子動起來，這是我們現在要去思考的事情，之後幾週會變成4台車一起跑，希望能夠快點找到方法讓他跑起來在嘗試4台車一起跑。 \n 更新：成功讓車子跑起來了，發現原因是因為我沒有下載pip install pyzmq、cbor、keyboard分別這三個，分別下載完之後，再重新GO一次就可以了，接下來再往4台車動起來邁進。 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': '41023236.html'}, {'title': '41023240', 'text': '同組成員在git clone時遇到了問題，最終大家合力解決了問題，希望大家未來合作也會如此順利，至於足球機器人我們還在研究怎麼讓它動起來。2023/4/20 \n 我發現我動不起來的原因是因為我沒有在防火牆那邊允許23000這個port，去防火牆那邊修改之後就可以順利啟動了。 2023/4/26 \n \n', 'tags': '', 'url': '41023240.html'}, {'title': '41023241', 'text': '在過程中我們卡關很多次，不斷地重新來過，但在我們不斷的摸索下，我們有了初步的成果，雖然進度上是落後的，但我們會盡我們最大的努力去完成，目前是在手動操控的摸索中，希望可以順利。 \n 在一開始我的檔案沒有辦法執行更改ip位置後，go沒有反應，在逐步檢查後發現是因為我的防火牆只設置到輸出規則並沒有設定輸入規則，設定完之後就成功啟動了。 \n \n \n', 'tags': '', 'url': '41023241.html'}, {'title': '41023244-2', 'text': '我們目前的機器人沒有辦法手動操控，我還在思考如何幫助同組的同學，希望可以憶起找出解答。 \n \n \n \n', 'tags': '', 'url': '41023244-2.html'}, {'title': 'w10', 'text': '有關 CoppeliaSim zmqRemoteAPI 問題 1.Q:What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n A:The ZeroMQ remote API is one of several ways an application can connect with CoppeliaSim.The ZeroMQ remote API allows to control a simulation (or the simulator itself) from an external application or a remote hardware (e.g. real robot, remote computer, etc.). It offers all API functions also available via a CoppeliaSim script: this includes all regular API functions (i.e. sim.* -type functions) \n 2.Q:How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n A: 要使用zmqRemoteAPI建立Python腳本和CoppeliaSim之間的連接，需要從以下步驟開始： \n \n \n 在CoppeliaSim中啟用遠程API：在CoppeliaSim的菜單欄中選擇“File -> Preferences -> Remote API”，勾選“Enable remote API”，並保存更改。 \n \n \n 在Python腳本中導入相關的模塊：使用Python的import語句導入vrep模塊，該模塊提供了與zmqRemoteAPI通信所需的函數和類。 \n \n 建立與CoppeliaSim的連接：使用vrep模塊的simxStart數建立與CoppeliaSim的連接。此函數返回一個客戶端ID，用於後續所有與Coppelia Sim 的通信。 \n \n 操作仿真場景中的各種對象：通過調用vrep模塊中提供的各種函數，可以操作CoppeliaSim仿真場景中的各種對象，例如機器人、傳感應器、物體等。 \n \n \n 關閉與CoppeliaSim的連接：使用vrep模型的simxFinishFinish關閉與CoppeliaSim的連接。 \n 通過以上步驟，可以建立Python腳本和CoppeliaSim之間的連接，並針對仿真場景中的各種對象進行操作。 \n \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n A: Here are some common use cases for zmqRemoteAPI in CoppeliaSim: \n These parts are answers obtained through chatgpt. \n for example 1.Multi-agent systems( 多智能體系統 ): The zmqRemoteAPI supports multi-agent systems, allowing you to control multiple simulations from a single remote computer or program. 2.Controlling simulation( 控制仿真 ): The zmqRemoteAPI allows you to control the simulation by sending commands to the simulation from a remote computer or program. This allows you to automate simulation processes and execute them remotely.結論 zmqRemoteAPI為與CoppeliaSim的交互提供了強大而靈活的方式，使其成為各種仿真和控制應用的多用途工具。41023241 \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n A: 使用zmqRemoteAPI與其他方法相比具有以下優點： \n 優點： \n \n \n 簡單易用：zmqRemoteAPI提供了一個簡單的接口，可以輕鬆地與CoppeliaSim進行通信。與其他通信方法相比較，zmqRemoteAPI的學習曲線更平整。 \n \n \n 實時性高：zmqRemoteAPI使用基於ZeroMQ的消息傳遞機制，可以實現快速的實時通信。與其他通信方法相比，zmqRemoteAPI工具有更高的響應速度和更低的延遲。 \n \n \n 跨平台支持：zmqRemoteAPI支持多種編程語言和操作系統，可以實現跨平台的通信。 \n \n \n 功能豐富：zmqRemoteAPI提供了大量的函數和類，可以用於操作CoppeliaSim中的各種對象，例如機器人、傳感器、物體等。用戶可以使用這個一些隨意數和類來構建複雜的控制和交互通訊。 \n \n \n 缺點： \n \n \n 性能比較：與直接使用C++ API相比較，使用zmqRemoteAPI會帶來一定的性能損失。這是由於zmqRemoteAPI需要在Python和CoppeliaSim之間進行多次數據轉換和傳遞，導致部分性能損失。 \n \n \n 安全性問題：由於zmqRemoteAPI是基於網絡傳輸的，因此可能存在安全隱患。特別是在使用公共網絡進行通信時，可能會面數暴露和攻擊的風險。 \n \n \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n A: 一個例子是使用zmqRemoteAPI控制器在CoppeliaSim中執行任務。具體步驟如下： \n \n \n 在CoppeliaSim中創造一個仿真場景，包括一個機器人和一些障礙物。 \n \n \n 在Python中編寫zmqRemoteAPI代碼，連接到CoppeliaSim，並獲得獲取機器和障礙物的句柄。 \n \n \n 編寫控制總編輯，現實機器人避免障礙物並達到指定位置的功能。例如，可以使用路徑規划算法和避免障礙算法控制製造器人運動。 \n \n \n 運行Python腳本，將控制命令發送到CoppeliaSim中的機器人。機器人將根據控制命令執行任務。 \n \n \n 觀察仿真結果並進行調試和優化。可以使用CoppeliaSim中的可視化工具來觀察人體運動和傳感器輸出，並根據需要調整控製作總編。 \n \n \n 該項目可以幫助用戶學習如何使用zmqRemoteAPI控制CoppeliaSim中的機器，並實現基本的路徑規劃和避免故障計算。 \n \n \n 心得 \n 41023236 \n 在網路尋找怎麼讓組別形成亂數抽籤 \n 41023240 \n 協助建立環境、尋找資料，建立gist \n 41023241 \n 使用chatgpt來協助回答問題，如何建立環境 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor1 結束  \n \n  ##########################################  \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '足球場景.ttt \n \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};
=======
var tipuesearch = {"pages": [{'title': 'About', 'text': 'cdtemplate \n https://mde.tw/pjcopsim \n 靜態網站 \n 倉儲 \n \n 41023236\xa0Bored1236\xa0 41023236 fork \n 41023240 YHY30678\xa0 41023240 fork \n 41023241 Yao-Hsien41023241\xa0 41023241fork倉儲 \n 41023244 \n \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023236-1', 'text': '這週是讓我們先熟習怎麼樣同時操控兩台車子去讓他行走，還有讓他能觸碰方塊並推著方塊走，但是實際去糙做的時候遇到的問題是不知道怎麼讓車子動起來，這是我們現在要去思考的事情，之後幾週會變成4台車一起跑，希望能夠快點找到方法讓他跑起來在嘗試4台車一起跑。 \n 更新：成功讓車子跑起來了，發現原因是因為我沒有下載pip install pyzmq、cbor、keyboard分別這三個，分別下載完之後，再重新GO一次就可以了，接下來再往4台車動起來邁進。 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': '41023236-1.html'}, {'title': '41023240-1', 'text': '同組成員在git clone時遇到了問題，最終大家合力解決了問題，希望大家未來合作也會如此順利，至於足球機器人我們還在研究怎麼讓它動起來。2023/4/20 \n 我發現我動不起來的原因是因為我沒有在防火牆那邊允許23000這個port，去防火牆那邊修改之後就可以順利啟動了。 2023/4/26 \n \n', 'tags': '', 'url': '41023240-1.html'}, {'title': '41023241-1', 'text': '在過程中我們卡關很多次，不斷地重新來過，但在我們不斷的摸索下，我們有了初步的成果，雖然進度上是落後的，但我們會盡我們最大的努力去完成，目前是在手動操控的摸索中，希望可以順利。 \n 在一開始我的檔案沒有辦法執行更改ip位置後，go沒有反應，在逐步檢查後發現是因為我的防火牆只設置到輸出規則並沒有設定輸入規則，設定完之後就成功啟動了。 \n \n \n', 'tags': '', 'url': '41023241-1.html'}, {'title': '41023244', 'text': '我們目前的機器人沒有辦法手動操控，我還在思考如何幫助同組的同學，希望可以憶起找出解答。 \n \n \n \n', 'tags': '', 'url': '41023244.html'}, {'title': 'w10', 'text': '有關 CoppeliaSim zmqRemoteAPI 問題 1.Q:What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n A:The ZeroMQ remote API is one of several ways an application can connect with CoppeliaSim.The ZeroMQ remote API allows to control a simulation (or the simulator itself) from an external application or a remote hardware (e.g. real robot, remote computer, etc.). It offers all API functions also available via a CoppeliaSim script: this includes all regular API functions (i.e. sim.* -type functions) \n 2.Q:How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n A: 要使用zmqRemoteAPI建立Python腳本和CoppeliaSim之間的連接，需要從以下步驟開始： \n \n \n 在CoppeliaSim中啟用遠程API：在CoppeliaSim的菜單欄中選擇“File -> Preferences -> Remote API”，勾選“Enable remote API”，並保存更改。 \n \n \n 在Python腳本中導入相關的模塊：使用Python的import語句導入vrep模塊，該模塊提供了與zmqRemoteAPI通信所需的函數和類。 \n \n 建立與CoppeliaSim的連接：使用vrep模塊的simxStart數建立與CoppeliaSim的連接。此函數返回一個客戶端ID，用於後續所有與Coppelia Sim 的通信。 \n \n 操作仿真場景中的各種對象：通過調用vrep模塊中提供的各種函數，可以操作CoppeliaSim仿真場景中的各種對象，例如機器人、傳感應器、物體等。 \n \n \n 關閉與CoppeliaSim的連接：使用vrep模型的simxFinishFinish關閉與CoppeliaSim的連接。 \n 通過以上步驟，可以建立Python腳本和CoppeliaSim之間的連接，並針對仿真場景中的各種對象進行操作。 \n \n 3.What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n A: Here are some common use cases for zmqRemoteAPI in CoppeliaSim: \n These parts are answers obtained through chatgpt. \n for example 1.Multi-agent systems( 多智能體系統 ): The zmqRemoteAPI supports multi-agent systems, allowing you to control multiple simulations from a single remote computer or program. 2.Controlling simulation( 控制仿真 ): The zmqRemoteAPI allows you to control the simulation by sending commands to the simulation from a remote computer or program. This allows you to automate simulation processes and execute them remotely.結論 zmqRemoteAPI為與CoppeliaSim的交互提供了強大而靈活的方式，使其成為各種仿真和控制應用的多用途工具。41023241 \n 4.What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n A: 使用zmqRemoteAPI與其他方法相比具有以下優點： \n 優點： \n \n \n 簡單易用：zmqRemoteAPI提供了一個簡單的接口，可以輕鬆地與CoppeliaSim進行通信。與其他通信方法相比較，zmqRemoteAPI的學習曲線更平整。 \n \n \n 實時性高：zmqRemoteAPI使用基於ZeroMQ的消息傳遞機制，可以實現快速的實時通信。與其他通信方法相比，zmqRemoteAPI工具有更高的響應速度和更低的延遲。 \n \n \n 跨平台支持：zmqRemoteAPI支持多種編程語言和操作系統，可以實現跨平台的通信。 \n \n \n 功能豐富：zmqRemoteAPI提供了大量的函數和類，可以用於操作CoppeliaSim中的各種對象，例如機器人、傳感器、物體等。用戶可以使用這個一些隨意數和類來構建複雜的控制和交互通訊。 \n \n \n 缺點： \n \n \n 性能比較：與直接使用C++ API相比較，使用zmqRemoteAPI會帶來一定的性能損失。這是由於zmqRemoteAPI需要在Python和CoppeliaSim之間進行多次數據轉換和傳遞，導致部分性能損失。 \n \n \n 安全性問題：由於zmqRemoteAPI是基於網絡傳輸的，因此可能存在安全隱患。特別是在使用公共網絡進行通信時，可能會面數暴露和攻擊的風險。 \n \n \n 5.Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n A: 一個例子是使用zmqRemoteAPI控制器在CoppeliaSim中執行任務。具體步驟如下： \n \n \n 在CoppeliaSim中創造一個仿真場景，包括一個機器人和一些障礙物。 \n \n \n 在Python中編寫zmqRemoteAPI代碼，連接到CoppeliaSim，並獲得獲取機器和障礙物的句柄。 \n \n \n 編寫控制總編輯，現實機器人避免障礙物並達到指定位置的功能。例如，可以使用路徑規划算法和避免障礙算法控制製造器人運動。 \n \n \n 運行Python腳本，將控制命令發送到CoppeliaSim中的機器人。機器人將根據控制命令執行任務。 \n \n \n 觀察仿真結果並進行調試和優化。可以使用CoppeliaSim中的可視化工具來觀察人體運動和傳感器輸出，並根據需要調整控製作總編。 \n \n \n 該項目可以幫助用戶學習如何使用zmqRemoteAPI控制CoppeliaSim中的機器，並實現基本的路徑規劃和避免故障計算。 \n \n \n 心得 \n 41023236 \n 在網路尋找怎麼讓組別形成亂數抽籤 \n 41023240 \n 協助建立環境、尋找資料，建立gist \n 41023241 \n 使用chatgpt來協助回答問題，如何建立環境 \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n  editor1 結束   ##########################################  \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': '41023236-2', 'text': '自評分數60分 \n 詢問怎麼創建計分板與傳感器 \n', 'tags': '', 'url': '41023236-2.html'}, {'title': '41023240-2', 'text': '自評分數60分 \n 協助繪製場景，操作remoteAPI \n', 'tags': '', 'url': '41023240-2.html'}, {'title': '41023241-2', 'text': '自評分數60分 \n 場景繪製，及remoteapi匯入 \n 足球場景.ttt \n \n \n \n', 'tags': '', 'url': '41023241-2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};
>>>>>>> ebba3c4bccef1078fd03ed88368f919c8954d3e4
