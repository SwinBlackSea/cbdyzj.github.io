# cURL

- Upload file

```sh
curl -F 'action=upload' -F 'filename=@<file>' <uri>
```

- Fetch image

```sh
curl http://www.topit.me/ | grep -P "http:[^>]*?(jpg|gif)" -o | xargs wget
```