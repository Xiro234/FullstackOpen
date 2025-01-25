# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note right of browser: Sends payload as json instead of plain-text. Then, browser handles displaying new list element.
    
    activate server
    server-->>browser: Status Code 201
    deactivate server
