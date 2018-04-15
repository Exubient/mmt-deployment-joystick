from rest_framework import serializers
from .models import Note

class NotesSerializer(serializers.ModelSerializer):
    """
    Serializing all the Authors
    """
    class Meta:
        model = Note
        fields = ('id', 'body', 'key', 'created_at')
