from django.db import models

# Create your models here.

#For commands 123,45,678
#For buttons 9 10 11 12
class Note(models.Model):
    body = models.IntegerField()
    key = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s' % (self.body, self.key)

