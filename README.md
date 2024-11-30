# YouTube Clone

This project is a simple YouTube-like application I built to learn more about **Google Cloud Platform**. It’s a hands-on way for me to explore how GCP services work together in a real-world app.

## Requirements
The scope of the project would be the fulfill the following functional requirements:
1. Users can sign in/out using their Google account.
2. Authenticated users can upload videos.
3. Videos are transcoded into multiple formats (e.g., 360p, 720p).
4. Users can view a list of uploaded videos (signed in or not).
5. Users can watch individual videos (signed in or not).


## High-Level Design
The following GCP services will be used:
- **Video Storage:** Google Cloud Storage for storing raw and processed videos.
- **Video Upload Events:** Cloud Pub/Sub for decoupling and queueing video upload events.
- **Video Processing Workers:** Cloud Run for scalable video transcoding with ffmpeg.
- **Video Metadata:** Firestore for storing metadata like titles, descriptions, and processing statuses.
- **Video API:** Firebase Functions for managing video uploads and metadata retrieval.
- **Web Client:** Next.js app hosted on Cloud Run.
- **Authentication:** Firebase Auth for managing user sign-ins and user records.