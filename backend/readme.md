### Server Setup

First make sure you cd into the server directory. After that please follow the instrctions.

```txt
cd backend
```

### Server Setup

1. Install `virtualenv` on your system.

   **Unix/macOS**

   ```txt
   python3 -m pip install --user virtualenv
   ```

   **Windows**

   Before starting, you may need to add python as an environment variable to PATH on your system.

   ```txt
   python -m ensurepip
   ```

   ```txt
   py -m pip install --user virtualenv
   ```

2. Create the virtual environment

   ```txt
   virutalenv env
   ```

   or 

   ```txt
   python -m venv ./venv
   ```

3. Run the virtual environment in your system.

   **Unix/macOS**

   ```txt
   source venv/bin/activate
   ```

   **Windows**

   ```txt
   .\venv\Scripts\activate
   ```

   If the environment doesn't get activated, open powershell as adminstrator and run the following command first:

   ```txt
   Set-ExecutionPolicy RemoteSigned
   ```

4. Install the packages in `requirements.txt`.

   ```txt
   pip install -r requirements.txt
   ```