# Generated by Django 3.0.3 on 2020-02-17 09:48

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0002_auto_20200216_2349'),
    ]

    operations = [
        migrations.CreateModel(
            name='Love',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.CharField(choices=[('DET', 'Dekor'), ('DIR', 'Directionen'), ('KM', 'KM'), ('KSP', 'KSP'), ('LED', 'Ledninge'), ('MAN', 'Manus'), ('MUS', 'Musikgruppen'), ('ORK', 'Orkestern'), ('SKA', 'Skådis'), ('TEK', 'Tekniken'), ('UPP', 'Uppsättning')], max_length=3)),
                ('text', models.CharField(max_length=500)),
                ('pub_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date published')),
            ],
        ),
    ]
